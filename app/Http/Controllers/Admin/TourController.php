<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tour;
use App\Models\TourImage;
use App\Models\Rate;
use App\Models\Itinerary;
use App\Models\TourType;
use App\Models\Province;
use App\Models\District;
use App\Models\Ward;
use Illuminate\Http\Request;

class TourController extends Controller
{
    public function index()
{
    $tours = Tour::with(['types', 'province', 'districts', 'ward'])->get();
    return view('admin.tours.index', compact('tours'));
}



    public function create()
    {
        $tourTypes = TourType::all();
        $provinces = Province::all();
        $districts = District::all();
        $wards = Ward::all();
        return view('admin.tours.create', compact('tourTypes', 'provinces','districts','wards'));
    }

    public function store(Request $request)
    {
        // Validate input
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'type_id' => 'required|exists:tour_types,id',
            'province_id' => 'required|exists:provinces,id',
            'district_id' => 'required|exists:provinces,id',
            'ward_id' => 'required|exists:provinces,id',
            // Add more validation rules as needed
        ]);

        // Tạo một tour mới từ dữ liệu được gửi lên từ form
        $tour = Tour::create($validatedData);

        // Xử lý lưu các hình ảnh nếu có
        if ($request->has('images')) {
            foreach ($request->input('images') as $image) {
                TourImage::create([
                    'tour_id' => $tour->id,
                    'image' => $image
                ]);
            }
        }

        // Xử lý lưu đánh giá nếu có
        if ($request->has('rates')) {
            foreach ($request->input('rates') as $rate) {
                Rate::create([
                    'tour_id' => $tour->id,
                    'rate' => $rate['rate']
                ]);
            }
        }

        // Xử lý lưu lịch trình nếu có
        if ($request->has('itinerary')) {
            Itinerary::create([
                'tour_id' => $tour->id,
                'day' => $request->input('itinerary.day'),
                'title' => $request->input('itinerary.title'),
                'itinerary' => $request->input('itinerary.itinerary')
            ]);
        }

        return redirect()->route('tours.index')->with('success', 'Tour created successfully.');
    }

    public function show($id)
    {
        // Lấy thông tin chi tiết của một tour cụ thể
        $tour = Tour::with('images', 'rates', 'itineraries', 'types', 'province', 'districts', 'wards')->findOrFail($id);
        return view('admin.tours.show', compact('tour'));
    }

    public function edit($id)
    {
        // Hiển thị form chỉnh sửa tour
        $tour = Tour::findOrFail($id);
        $tourTypes = TourType::all();
        $provinces = Province::all();
        $districts = District::all();
        $wards = Ward::all();
        return view('admin.tours.edit', compact('tour', 'tourTypes', 'provinces','districts','wards'));
    }

    public function update(Request $request, $id)
    {
        // Validate input
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'type_id' => 'required|exists:tour_types,id',
            'province_id' => 'required|exists:provinces,id',
            'district_id' => 'required|exists:districts,id',
            'ward_id' => 'required|exists:wards,id'
            // Add more validation rules as needed
        ]);

        // Cập nhật thông tin của tour
        $tour = Tour::findOrFail($id);
        $tour->update($validatedData);

        // Xử lý cập nhật hình ảnh
        if ($request->has('images')) {
            TourImage::where('tour_id', $id)->delete(); // Xóa hết các hình ảnh cũ của tour
            foreach ($request->input('images') as $image) {
                TourImage::create([
                    'tour_id' => $id,
                    'image' => $image
                ]);
            }
        }

        // Xử lý cập nhật đánh giá
        if ($request->has('rates')) {
            Rate::where('tour_id', $id)->delete(); // Xóa hết các đánh giá cũ của tour
            foreach ($request->input('rates') as $rate) {
                Rate::create([
                    'tour_id' => $id,
                    'rate' => $rate['rate']
                ]);
            }
        }

        // Xử lý cập nhật lịch trình
        if ($request->has('itinerary')) {
            $itinerary = Itinerary::where('tour_id', $id)->first();
            if ($itinerary) {
                $itinerary->update([
                    'day' => $request->input('itinerary.day'),
                    'title' => $request->input('itinerary.title'),
                    'itinerary' => $request->input('itinerary.itinerary')
                ]);
            } else {
                Itinerary::create([
                    'tour_id' => $id,
                    'day' => $request->input('itinerary.day'),
                    'title' => $request->input('itinerary.title'),
                    'itinerary' => $request->input('itinerary.itinerary')
                ]);
            }
        }

        return redirect()->route('tours.index')->with('success', 'Tour updated successfully.');
    }

    public function destroy($id)
    {
        // Xóa một tour và các liên quan (hình ảnh, đánh giá, lịch trình)
        TourImage::where('tour_id', $id)->delete();
        Rate::where('tour_id', $id)->delete();
        Itinerary::where('tour_id', $id)->delete();
        Tour::findOrFail($id)->delete();
        return redirect()->route('tours.index')->with('success', 'Tour deleted successfully.');
    }
}
