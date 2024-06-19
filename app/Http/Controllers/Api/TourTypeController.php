<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TourType;

class TourTypeController extends Controller
{
    // Lấy danh sách các tour types
    public function index()
    {
        $tourTypes = TourType::with('tour')->get();
        return response()->json($tourTypes);
    }

    // Lấy thông tin chi tiết của một tour type cùng với các tour liên quan
    public function show($id)
    {
        $tourType = TourType::with('tour')->find($id);
        if ($tourType) {
            return response()->json($tourType);
        } else {
            return response()->json(['message' => 'Tour Type not found'], 404);
        }
    }

    // Tạo mới một tour type
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name_type' => 'required|string|max:255'
        ]);

        $tourType = TourType::create($validatedData);
        return response()->json($tourType, 201);
    }

    // Cập nhật một tour type
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name_type' => 'required|string|max:255'
        ]);

        $tourType = TourType::find($id);
        if ($tourType) {
            $tourType->update($validatedData);
            return response()->json($tourType);
        } else {
            return response()->json(['message' => 'Tour Type not found'], 404);
        }
    }

    // Xóa một tour type
    public function destroy($id)
    {
        $tourType = TourType::find($id);
        if ($tourType) {
            $tourType->delete();
            return response()->json(['message' => 'Tour Type deleted']);
        } else {
            return response()->json(['message' => 'Tour Type not found'], 404);
        }
    }
}
