<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ward;
class WardController extends Controller
{
    // Lấy danh sách các wards
    public function index()
    {
        $wards = Ward::with('tours')->get();
        return response()->json($wards);
    }

    // Lấy thông tin chi tiết của một ward cùng với các tours liên quan
    public function show($id)
    {
        $ward = Ward::with('tours')->find($id);
        if ($ward) {
            return response()->json($ward);
        } else {
            return response()->json(['message' => 'Ward not found'], 404);
        }
    }

    // Tạo mới một ward
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'district_id' => 'required|integer|exists:districts,id'
        ]);

        $ward = Ward::create($validatedData);
        return response()->json($ward, 201);
    }

    // Cập nhật một ward
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'district_id' => 'required|integer|exists:districts,id'
        ]);

        $ward = Ward::find($id);
        if ($ward) {
            $ward->update($validatedData);
            return response()->json($ward);
        } else {
            return response()->json(['message' => 'Ward not found'], 404);
        }
    }

    // Xóa một ward
    public function destroy($id)
    {
        $ward = Ward::find($id);
        if ($ward) {
            $ward->delete();
            return response()->json(['message' => 'Ward deleted']);
        } else {
            return response()->json(['message' => 'Ward not found'], 404);
        }
    }
}
