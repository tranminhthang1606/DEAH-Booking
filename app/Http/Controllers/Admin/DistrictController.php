<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\District;
use App\Models\Province;
use Illuminate\Http\Request;

class DistrictController extends Controller
{
    //
    public function index()
    {
        $districts = District::all();
        return view('admin.Districts.index', compact('districts'));
    }

    public function create()
    {
        $provinces = Province::all();
        return view('admin.Districts.add', compact('provinces'));
    }

    
    public function store(Request $request)
    {
        $request->validate([
            'province_id' => 'required|exists:provinces,id',
            'name' => 'required|string|max:255',
        ]);

        $district = District::create($request->all());

        return redirect()->route('districts.index')
                        ->with('success', 'District created successfully.');
    }


    public function show(District $district)
    {
        return view('districts.show', compact('district'));
    }


    public function edit(District $district)
    {
        $provinces = Province::all();
        return view('admin.Districts.edit', compact('district', 'provinces'));
    }


    public function update(Request $request, District $district)
    {
        $request->validate([
            'province_id' => 'required|exists:provinces,id',
            'name' => 'required|string|max:255',
        ]);

        $district->update($request->all());

        return redirect()->route('districts.index')
                        ->with('success', 'District updated successfully');
    }


    public function destroy(District $district)
    {
        $district->delete();

        return redirect()->route('districts.index')
                        ->with('success', 'District deleted successfully');
    }

}
