<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Required;
use App\Models\District;
use App\Models\Hotel;
use App\Models\Province;
use App\Models\Ward;
use Illuminate\Http\Request;

class HotelController extends Controller
{
    public function index()
    {
        $hotels = Hotel::all();
        return view('admin.Hotel.index', compact('hotels'));
    }

    public function create()
    {
        $provinces = Province::all();
        $districts = District::all();
        $wards = Ward::all();
        return view('admin.Hotel.add', compact('provinces', 'districts', 'wards'));
    }

 
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'price' => 'required',
            'promotion' => 'required',
            'description' => 'required',
            'province_id' => 'required|exists:provinces,id',
            'district_id' => 'required|exists:districts,id',
            'ward_id' => 'required|exists:wards,id',
            'address' => 'required',
            'status' => 'required|boolean',
            'is_active' => 'required|integer',
        ]);

        $hotel = Hotel::create($validatedData);
        return redirect()->route('hotels.index')->with('success', 'Hotel created successfully.');
    }

    public function show($id)
    {
        $hotel = Hotel::with(['province', 'district', 'ward'])->findOrFail($id);
        return view('hotels.show', compact('hotel'));
    }

 
    public function edit($id)
    {
        $hotel = Hotel::findOrFail($id);
        $provinces = Province::all();
        $districts = District::where('province_id', $hotel->province_id)->get();
        $wards = Ward::where('district_id', $hotel->district_id)->get();
        return view('hotels.edit', compact('hotel', 'provinces', 'districts', 'wards'));
    }

 
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'price' => 'required',
            'promotion' => 'required',
            'description' => 'required',
            'province_id' => 'required|exists:provinces,id',
            'district_id' => 'required|exists:districts,id',
            'ward_id' => 'required|exists:wards,id',
            'address' => 'required',
            'status' => 'required|boolean',
            'is_active' => 'required|integer',
        ]);

        $hotel = Hotel::findOrFail($id);
        $hotel->update($validatedData);
        return redirect()->route('hotels.index')->with('success', 'Hotel updated successfully.');
    }

 
    public function destroy($id)
    {
        $hotel = Hotel::findOrFail($id);
        $hotel->delete();
        return redirect()->route('hotels.index')->with('success', 'Hotel deleted successfully.');
    }
}