<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TourType;
use Illuminate\Http\Request;

class TourTypeController extends Controller
{
    public function index()
    {
        $tourTypes = TourType::all();
        return view('tour_types.index', compact('tourTypes'));
    }

    public function create()
    {
        return view('tour_types.create');
    }

    public function store(Request $request)
    {
        $request->validate(['name_type' => 'required']);
        TourType::create($request->all());
        return redirect()->route('tour_types.index')->with('success', 'Tour type created successfully.');
    }

    public function show($id)
    {
        $tourType = TourType::findOrFail($id);
        return view('tour_types.show', compact('tourType'));
    }

    public function edit($id)
    {
        $tourType = TourType::findOrFail($id);
        return view('tour_types.edit', compact('tourType'));
    }

    public function update(Request $request, $id)
    {
        $request->validate(['name_type' => 'required']);
        $tourType = TourType::findOrFail($id);
        $tourType->update($request->all());
        return redirect()->route('tour_types.index')->with('success', 'Tour type updated successfully.');
    }

    public function destroy($id)
    {
        TourType::findOrFail($id)->delete();
        return redirect()->route('tour_types.index')->with('success', 'Tour type deleted successfully.');
    }
}

