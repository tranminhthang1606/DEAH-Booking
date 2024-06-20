<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Itinerary;
use App\Models\Tour;
use Illuminate\Http\Request;

class ItineraryController extends Controller
{
    public function index()
    {
        $itineraries = Itinerary::with('tour')->get();
        return view('admin.itineraries.index', compact('itineraries'));
    }

    public function create()
    {
        $tours = Tour::all();
        return view('admin.itineraries.create', compact('tours'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'tour_id' => 'required|exists:tours,id',
            'day' => 'required|integer',
            'title' => 'required|string|max:255',
            'itinerary' => 'required|string',
        ]);

        Itinerary::create($request->all());

        return redirect()->route('admin.itineraries.index')->with('success', 'Itinerary created successfully.');
    }

    public function show(Itinerary $itinerary)
    {
        return view('admin.itineraries.show', compact('itinerary'));
    }

    public function edit(Itinerary $itinerary)
    {
        $tours = Tour::all();
        return view('admin.itineraries.edit', compact('itinerary', 'tours'));
    }

    public function update(Request $request, Itinerary $itinerary)
    {
        $request->validate([
            'tour_id' => 'required|exists:tours,id',
            'day' => 'required|integer',
            'title' => 'required|string|max:255',
            'itinerary' => 'required|string',
        ]);

        $itinerary->update($request->all());

        return redirect()->route('admin.itineraries.index')->with('success', 'Itinerary updated successfully.');
    }

    public function destroy(Itinerary $itinerary)
    {
        $itinerary->delete();

        return redirect()->route('admin.itineraries.index')->with('success', 'Itinerary deleted successfully.');
    }
}
