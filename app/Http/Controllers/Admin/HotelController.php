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
        $wards = Province::all();
        return view('admin.Hotel.add', compact('provinces', 'districts', 'wards'));
    }


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'price' => 'required|numeric',
            'promotion' => 'nullable|string',
            'province_id' => 'required|exists:provinces,id',
            'district_id' => 'required|exists:districts,id',
            'ward_id' => 'required|exists:wards,id',
            'address' => 'required|string',
            'status' => 'required|boolean',
        ]);
    
        $hotel = Hotel::create($validatedData);
    
        return redirect()->route('hotels.index')->with('success', 'Hotel created successfully.');
    }
    public function show(Hotel $hotel)
    {
        $hotel->load('province', 'district', 'ward');
        return view('hotels.show', compact('hotel'));
    }

    public function edit(Hotel $hotel)
    {
        $hotel->load('province', 'district', 'ward');
        $provinces = Province::all();
        $districts = District::where('province_id', $hotel->province_id)->get();
        $wards = Ward::where('district_id', $hotel->district_id)->get();
        return view('hotels.edit', compact('hotel', 'provinces', 'districts', 'wards'));
    }


    public function update(Request $request, Hotel $hotel)
    {
        $request->validate([
            'name' => 'required',
            'price' => 'required|numeric',
            'promotion' => 'required',
            'description' => 'required',
            'province_id' => 'required|exists:provinces,id',
            'district_id' => 'required|exists:districts,id',
            'ward_id' => 'required|exists:wards,id',
            'address' => 'required',
            'status' => 'required|boolean'
        ]);

        $hotel->update($request->all());

        return redirect()->route('hotels.index')
                        ->with('success','Hotel updated successfully.');
    }

  
    public function destroy(Hotel $hotel)
    {
        $hotel->delete();

        return redirect()->route('hotels.index')
                        ->with('success','Hotel deleted successfully.');
    }
}
