<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Province;
use Illuminate\Http\Request;

class ProvinceController extends Controller
{
    //
    public function index()
{
    $provinces = Province::all();
    return view('admin.Provinces.index', compact('provinces'));
}
public function create()
{
    return view('admin.Provinces.add');
}

public function store(Request $request)
{
    $request->validate([
        'name' => 'required|max:50',
    ]);

    Province::create($request->all());

    return redirect()->route('provinces.index')
                     ->with('success', 'Province created successfully.');
}
public function edit(Province $province)
{
    return view('admin.Provinces.edit', compact('province'));
}

public function update(Request $request, Province $province)
{
    $request->validate([
        'name' => 'required|max:255',
    ]);

    $province->update($request->all());

    return redirect()->route('provinces.index')
                     ->with('success', 'Province updated successfully.');
}
public function destroy(Province $province)
{
    $province->delete();

    return redirect()->route('provinces.index')
                     ->with('success', 'Province deleted successfully.');
}

}
