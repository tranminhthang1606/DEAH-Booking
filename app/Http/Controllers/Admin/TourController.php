<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\TourRequest;
use App\Models\Attribute;
use App\Models\Hotel;
use App\Models\Tour;
use App\Models\TourImage;
use App\Models\Itinerary;
use App\Models\Province;
use App\Models\Rate;
use App\Models\TourAttribute;
use App\Models\TourComment;
use App\Models\TourHotel;
use App\Models\TourType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use League\Flysystem\UrlGeneration\PublicUrlGenerator;

class TourController extends Controller
{
    public function index()
    {
        $tours = Tour::orderByDesc('created_at')->paginate(10);
        $title = "Tours list";
        return view('admin.tours.index', compact('tours', 'title'));
    }



    public function create()
    {
        $title = "Tour add";
        $attributes = Attribute::all();
        $provinces = Province::all();
        $types = TourType::all();
        return view('admin.tours.create', compact('title', 'provinces', 'attributes', 'types'));
    }

    public function store(TourRequest $request)
    {
        // Validate input
        $request->is_active ? $request->is_active : $request->merge(['is_active' => 0]);
        $request->merge(['views' => 0]);
        $tour = Tour::create($request->all());
        if ($tour) {
            for ($i = 0; $i < $request->day; $i++) {
                Itinerary::create([
                    'tour_id' => $tour->id,
                    'day' => $i + 1,
                    'title' => $request->title_itineraries[$i],
                    'itinerary' => $request->itineraries[$i],
                ]);
            }
            foreach ($request->file('images') as $image) {
                $imageName = "storage/tours/" . time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('storage/tours'), $imageName);
                TourImage::create([
                    'tour_id' => $tour->id,
                    'image' => $imageName
                ]);
            }
            foreach ($request->input('attributes') as $attribute) {
                TourAttribute::create([
                    'tour_id' => $tour->id,
                    'attribute_id' => $attribute,
                ]);
            }
            foreach ($request->input('hotels') as $hotel) {
                TourHotel::create([
                    'tour_id' => $tour->id,
                    'hotel_id' => $hotel,
                ]);
            }
        }




        return redirect()->route('tours.index')->with('success', 'Tour created successfully.');
    }

    public function show($id)
    {
        // Lấy thông tin chi tiết của một tour cụ thể
        $tour = Tour::find($id);
        $attributes = Attribute::all();
        $provinces = Province::all();
        $types = TourType::all();
        $hotels = Hotel::all();
        $tour->images = $tour->images()->paginate(5);
        $tour->attributes = $tour->attributes()->paginate(10);
        $tour->comments = $tour->comments()->paginate(10);
        $tour->rates = $tour->rates()->paginate(10);
        $tour->hotels = $tour->hotels()->paginate(10);
        $attributes = Attribute::all();
        $hotels = Hotel::where('is_active', 1)->get();
        $title = "Tour show";
        return view('admin.tours.show', compact('tour', 'hotels', 'attributes', 'title', 'provinces'));
    }

    public function edit($id)
    {
        // Hiển thị form chỉnh sửa tour
        $tour = Tour::findOrFail($id);
        $tourTypes = TourType::all();
        return view('admin.tours.edit', compact('tour', 'tourTypes'));
    }

    public function update(Request $request, $id)
    {
        // Validate input
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'price' => 'required|numeric',
            'promotion' => 'required|numeric|lt:price',
            'day' => 'required|numeric',
            'type_id' => 'required|exists:tour_types,id',
            'description' => 'required',
            'images' => 'required|array',
            'images.*' => 'required|image|mimes:jpeg,png,jpg,gif',
            'hotels' => 'required',
            'hotels.*' => 'required|numeric|exists:hotels,id',
            'province_id' => 'required|exists:provinces,id',
            'district_id' => 'required|exists:districts,id',
            'ward_id' => 'required|exists:wards,id',
            'attributes' => 'required|array',
            'attributes.*' => 'required|numeric|exists:attributes,id',
            'title_itinerary' => 'required',
            'itinerary_add' => 'required',

        ]);

        // Cập nhật thông tin của tour
        $tour = Tour::findOrFail($id);
        $tour->update($validatedData);

        // Xử lý cập nhật hình ảnh

        // Xử lý cập nhật lịch trình
        if ($request->has('itinerary_add')) {
            Itinerary::create([
                'day' => $request->day_add,
                'title' => $request->input('title_itinerary'),
                'itinerary' => $request->input('itinerary_add')
            ]);
        }
        if ($request->has('itinerary_update')) {
            Itinerary::where('id', $request->input('itinerary_update'))
                ->update([
                    'day' => $request->day_update,
                    'title' => $request->input('title_itinerary'),
                    'itinerary' => $request->input('itinerary_update')
                ]);
        }

        return redirect()->route('tours.index')->with('success', 'Tour updated successfully.');
    }
    public function getItinerary($id)
    {
        $itinerary = Itinerary::where('id', $id)->get();
        return response()->json($itinerary);
    }
    public function addHotels(Request $request)
    {
        $request->validate([
            'hotels' => 'required|array',
            'hotels.*' => 'required|numeric|exists:hotels,id',
            Rule::unique('tour_hotel', 'hotel_id')->where(function ($query) use ($request) {
                return $query->where('tour_id', $request->tour_id);
            }),
        ]);
        foreach ($request->input('hotels') as $hotel) {
            TourHotel::create([
                'tour_id' => $request->tour_id,
                'hotel_id' => $hotel,
            ]);
        }

        return redirect()->back()->with('success', 'Add hotel successfully.');
    }
    public function delHotel(Request $request)
    {
        TourHotel::where('tour_id', $request->tour_id)->where('hotel_id', $request->hotel_id)
            ->delete();
        return redirect()->back()->with('success', 'Del hotel successfully.');

    }

    public function addItinerary(Request $request)
    {

        $request->validate([
            'day' => 'required|numeric',
            'title' => 'required',
            'itinerary' => 'required',
        ]);
        Itinerary::create([
            'tour_id' => $request->tour_id,
            'day' => $request->day,
            'title' => $request->title,
            'itinerary' => $request->itinerary
        ]);
        return redirect()->back()->with('success', 'Add Itinerary tour successfully');
    }
    public function updateItinerary(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'day' => 'required|numeric',
            'title' => 'required',
            'itinerary' => 'required',
        ]);
        if ($validator->fails()) {
            return redirect()->back()->with('error', $validator->errors()->first());

        }
        Itinerary::find($request->id)->update([
            'day' => $request->day,
            'title' => $request->title,
            'itinerary' => $request->itinerary
        ]);
        return redirect()->back()->with('success', 'Update Itinerary tour successfully');
    }

    public function delItinerary($id)
    {

        Itinerary::where('id', $id)->delete();
        return redirect()->back()->with('success', 'Update Itinerary tour successfully');
    }
    public function addImage(Request $request)
    {
        $request->validate([
            'images' => 'required|array',
            'images.*' => 'required|image|mimes:jpeg,png,jpg,gif'
        ]);
        foreach ($request->file('images') as $image) {
            $imageName = "storage/tours/" . time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('storage/tours'), $imageName);
            TourImage::create([
                'tour_id' => $request->tour_id,
                'image' => $imageName
            ]);
        }
        return redirect()->back()->with('success', 'Add image tour successfully');


    }
    public function delImage($id)
    {
        $del = TourImage::find($id)->delete();
        if ($del) {
            return redirect()->back()->with('success', 'Delete image tour successfully');
        }
        return redirect()->back()->with('error', 'Delete image tour faild');

    }
    public function addAttributes(Request $request)
    {
        $request->validate([
            'attributes' => 'required|exists:attributes,id',
            Rule::unique('tour_attribute', 'attribute_id')->where(function ($query) use ($request) {
                return $query->where('tour_id', $request->id);
            }),
        ]);
        foreach ($request->input('attributes') as $attribute) {
            TourAttribute::create([
                'tour_id' => $request->tour_id,
                'attribute_id' => $attribute
            ]);
        }
        return redirect()->back()->with('success', 'Add attributes tour successfully');
    }
    public function delAttribute(Request $request)
    {
        TourAttribute::where('tour_id', $request->tour_id)
            ->where('attribute_id', $request->attribute_id)->delete();
        return redirect()->back()->with('success', 'Delete attributes tour successfully');
    }
    public function delRate($id)
    {
        $del = Rate::find($id)->delete();
        if ($del) {
            return redirect()->back()->with('success', 'Delete rate successfully');
        }
        return redirect()->back()->with('error', 'Delete rate faild');

    }
    public function delComment($id)
    {
        $del = TourComment::find($id)->delete();
        if ($del) {
            return redirect()->back()->with('success', 'Delete comment successfully');
        }
        return redirect()->back()->with('error', 'Delete comment faild');

    }
    public function destroy($id)
    {
        // Xóa một tour và các liên quan (hình ảnh, đánh giá, lịch trình)
        TourImage::where('tour_id', $id)->delete();
        TourAttribute::where('tour_id', $id)->delete();
        TourComment::where('tour_id', $id)->delete();
        Rate::where('tour_id', $id)->delete();
        Itinerary::where('tour_id', $id)->delete();
        Tour::findOrFail($id)->delete();
        return redirect()->route('tours.index')->with('success', 'Tour deleted successfully.');
    }
}
