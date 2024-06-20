<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Province;
use Illuminate\Http\Request;

class ProvinceController extends Controller
{
    public function index()
    {
        $provinces = Province::all();
        return view('admin.province.index', compact('provinces'));
    }

    public function create()
    {
        return view('admin.province.create');
    }

    public function store(Request $request)
    {
        $request->validate(['name' => 'required']);
        Province::create($request->all());
        return redirect()->route('admin.provinces.index')->with('success', 'Province created successfully.');
    }

    public function show($id)
    {
        $province = Province::findOrFail($id);
        return view('admin.province.show', compact('province'));
    }

    public function edit($id)
    {
        $province = Province::findOrFail($id);
        return view('admin.province.edit', compact('province'));
    }

    public function update(Request $request, $id)
    {
        $request->validate(['name' => 'required']);
        $province = Province::findOrFail($id);
        $province->update($request->all());
        return redirect()->route('admin.provinces.index')->with('success', 'Province updated successfully.');
    }

    public function destroy($id)
    {
        Province::findOrFail($id)->delete();
        return redirect()->route('admin.provinces.index')->with('success', 'Province deleted successfully.');
    }
}