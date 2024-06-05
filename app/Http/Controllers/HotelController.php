<?php

namespace App\Http\Controllers;

use App\Http\Requests\Required;
use App\Models\Hotel;
use Illuminate\Http\Request;

class HotelController extends Controller
{
    //
    public function index()
    {
        $data = Hotel::all();
        return response()->json($data);
    }
    
    public function show(string $id)
    {
        $hotel = Hotel::findOrFail($id);
        return response()->json($hotel);
    }
    
    public function store(Request $request)
    {
        $data = $request->all();
        $hotel = Hotel::query()->create($data);
        return response()->json($hotel, 201);
    }
    
    public function update(Request $request, string $id)
    {
        $hotel = Hotel::findOrFail($id);
        $data = $request->all();
        $hotel->update($data);
        return response()->json($hotel);
    }
    
    public function destroy($id)
    {
        $item = Hotel::findOrFail($id);
        $item->delete();
        return response()->json(['message' => 'Hotel deleted']);
    }
}
