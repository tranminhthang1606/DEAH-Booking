<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Tour;
use App\Models\TourImage;
use Illuminate\Http\Request;

class TourController extends Controller
{
    public function index()
    {
        // Lấy tất cả tours cùng với các hình ảnh, đánh giá và lịch trình của chúng
        $tours = Tour::with('images', 'rates', 'itinerary')->get();
        return response()->json($tours);
    }

    public function show($id)
    {
        // Lấy một tour cụ thể cùng với các hình ảnh, đánh giá và lịch trình của nó
        $tour = Tour::with('images', 'rates', 'itinerary')->findOrFail($id);
        return response()->json($tour);
    }

    public function store(Request $request)
    {
        // Tạo một tour mới
        $tour = Tour::create($request->all());

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

        return response()->json($tour, 201);
    }

    public function update(Request $request, $id)
    {
        // Cập nhật thông tin của một tour
        $tour = Tour::findOrFail($id);
        $tour->update($request->all());

        // Xử lý cập nhật các hình ảnh
        if ($request->has('images')) {
            TourImage::where('tour_id', $id)->delete(); // Xóa hết các hình ảnh cũ của tour
            foreach ($request->input('images') as $image) {
                TourImage::create([
                    'tour_id' => $id,
                    'image' => $image
                ]);
            }
        }

        // Xử lý cập nhật các đánh giá
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

        $updatedTour = Tour::with('images', 'rates', 'itinerary')->findOrFail($id);
        return response()->json($updatedTour);
    }

    public function destroy($id)
    {
        // Xóa một tour và các liên quan (hình ảnh, đánh giá, lịch trình)
        TourImage::where('tour_id', $id)->delete();
        Rate::where('tour_id', $id)->delete();
        Itinerary::where('tour_id', $id)->delete();
        Tour::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}