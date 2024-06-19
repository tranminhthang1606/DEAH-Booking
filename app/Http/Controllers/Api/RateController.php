<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Rate;
class RateController extends Controller
{
    // Lấy danh sách các đánh giá
    public function index()
    {
        $rates = Rate::all();
        return response()->json($rates);
    }

    // Lấy thông tin chi tiết của một đánh giá
    public function show($id)
    {
        $rate = Rate::find($id);
        if ($rate) {
            return response()->json($rate);
        } else {
            return response()->json(['message' => 'Rate not found'], 404);
        }
    }

    // Tạo mới một đánh giá
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'tour_id' => 'required|exists:tours,id',
            'rate' => 'required|integer|min:1|max:5'
        ]);

        $rate = Rate::create($validatedData);
        return response()->json($rate, 201);
    }

    // Cập nhật một đánh giá
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'tour_id' => 'required|exists:tours,id',
            'rate' => 'required|integer|min:1|max:5'
        ]);

        $rate = Rate::find($id);
        if ($rate) {
            $rate->update($validatedData);
            return response()->json($rate);
        } else {
            return response()->json(['message' => 'Rate not found'], 404);
        }
    }

    // Xóa một đánh giá
    public function destroy($id)
    {
        $rate = Rate::find($id);
        if ($rate) {
            $rate->delete();
            return response()->json(['message' => 'Rate deleted']);
        } else {
            return response()->json(['message' => 'Rate not found'], 404);
        }
    }
}
