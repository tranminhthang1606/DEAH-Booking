<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TourHotel;

class TourHotelController extends Controller
{
    // Lấy danh sách các tour hotels
    public function index()
    {
        $tourHotels = TourHotel::all();
        return response()->json($tourHotels);
    }

    // Lấy thông tin chi tiết của một tour hotel
    public function show($id)
    {
        $tourHotel = TourHotel::find($id);
        if ($tourHotel) {
            return response()->json($tourHotel);
        } else {
            return response()->json(['message' => 'Tour Hotel not found'], 404);
        }
    }

    // Tạo mới một tour hotel
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'tour_id' => 'required|integer|exists:tours,id',
            'hotel_id' => 'required|integer|exists:hotels,id'
        ]);

        $tourHotel = TourHotel::create($validatedData);
        return response()->json($tourHotel, 201);
    }

    // Cập nhật một tour hotel
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'tour_id' => 'required|integer|exists:tours,id',
            'hotel_id' => 'required|integer|exists:hotels,id'
        ]);

        $tourHotel = TourHotel::find($id);
        if ($tourHotel) {
            $tourHotel->update($validatedData);
            return response()->json($tourHotel);
        } else {
            return response()->json(['message' => 'Tour Hotel not found'], 404);
        }
    }

    // Xóa một tour hotel
    public function destroy($id)
    {
        $tourHotel = TourHotel::find($id);
        if ($tourHotel) {
            $tourHotel->delete();
            return response()->json(['message' => 'Tour Hotel deleted']);
        } else {
            return response()->json(['message' => 'Tour Hotel not found'], 404);
        }
    }
}
