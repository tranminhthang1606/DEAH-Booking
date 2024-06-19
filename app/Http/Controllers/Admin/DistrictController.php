<?php

// app/Http/Controllers/Admin/DistrictController.php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\District;
use App\Models\Province;
use Illuminate\Http\Request;

class DistrictController extends Controller
{
    public function index()
    {
        $districts = District::with('province')->get();
        return view('admin.districts.index', compact('districts'));
    }

    public function create()
    {
        $provinces = Province::all();
        return view('admin.districts.create', compact('provinces'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'province_id' => 'required|exists:provinces,id',
            'ward' => 'nullable|string|max:255',
        ]);

        District::create($request->all());

        return redirect()->route('admin.districts.index')->with('success', 'District created successfully.');
    }

    public function show($id)
    {
        $district = District::findOrFail($id);
        return view('admin.districts.show', compact('district'));
    }

    public function edit($id)
    {
        $district = District::findOrFail($id);
        $provinces = Province::all();
        return view('admin.districts.edit', compact('district', 'provinces'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'province_id' => 'required|exists:provinces,id',
            'ward' => 'nullable|string|max:255',
        ]);

        $district = District::findOrFail($id);
        $district->update($request->all());

        return redirect()->route('admin.districts.index')->with('success', 'District updated successfully.');
    }

    public function destroy($id)
    {
        $district = District::findOrFail($id);
        $district->delete();

        return redirect()->route('admin.districts.index')->with('success', 'District deleted successfully.');
    }
}

