<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Ward;
use App\Models\District;
use Illuminate\Http\Request;

class WardController extends Controller
{
    public function index()
    {
        $wards = Ward::all();
        return view('admin.wards.index', compact('wards'));
    }

    public function create()
    {
        $districts = District::all();
        return view('admin.wards.create', compact('districts'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'district_id' => 'required|exists:districts,id',
        ]);

        Ward::create($request->all());

        return redirect()->route('wards.index')->with('success', 'Ward created successfully.');
    }

    public function show($id)
    {
        $ward = Ward::findOrFail($id);
        return view('admin.wards.show', compact('ward'));
    }

    public function edit($id)
    {
        $ward = Ward::findOrFail($id);
        $districts = District::all();
        return view('admin.wards.edit', compact('ward', 'districts'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'district_id' => 'required|exists:districts,id',
        ]);

        $ward = Ward::findOrFail($id);
        $ward->update($request->all());

        return redirect()->route('wards.index')->with('success', 'Ward updated successfully.');
    }

    public function destroy($id)
    {
        Ward::findOrFail($id)->delete();
        return redirect()->route('wards.index')->with('success', 'Ward deleted successfully.');
    }
}
