<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TourAttribute;

class TourAttributeController extends Controller
{
    // Lấy danh sách các tour attributes
    public function index()
    {
        $tourAttributes = TourAttribute::all();
        return response()->json($tourAttributes);
    }

    // Lấy thông tin chi tiết của một tour attribute
    public function show($id)
    {
        $tourAttribute = TourAttribute::find($id);
        if ($tourAttribute) {
            return response()->json($tourAttribute);
        } else {
            return response()->json(['message' => 'Tour Attribute not found'], 404);
        }
    }

    // Tạo mới một tour attribute
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'attribute_id' => 'required|integer|exists:attributes,id',
            'tour_id' => 'required|integer|exists:tours,id'
        ]);

        $tourAttribute = TourAttribute::create($validatedData);
        return response()->json($tourAttribute, 201);
    }

    // Cập nhật một tour attribute
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'attribute_id' => 'required|integer|exists:attributes,id',
            'tour_id' => 'required|integer|exists:tours,id'
        ]);

        $tourAttribute = TourAttribute::find($id);
        if ($tourAttribute) {
            $tourAttribute->update($validatedData);
            return response()->json($tourAttribute);
        } else {
            return response()->json(['message' => 'Tour Attribute not found'], 404);
        }
    }

    // Xóa một tour attribute
    public function destroy($id)
    {
        $tourAttribute = TourAttribute::find($id);
        if ($tourAttribute) {
            $tourAttribute->delete();
            return response()->json(['message' => 'Tour Attribute deleted']);
        } else {
            return response()->json(['message' => 'Tour Attribute not found'], 404);
        }
    }
}
