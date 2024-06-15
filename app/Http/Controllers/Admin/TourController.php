<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Tour;
use Illuminate\Http\Request;

class TourController extends Controller
{
    //
    public function index()
{
    $data = Tour::all();
    return response()->json($data);
}

public function show(string $id)
{
    $tour = Tour::findOrFail($id);
    return response()->json($tour);
}

public function store(Request $request)
{
    $data = $request->all();
    $tour = Tour::query()->create($data);
    return response()->json($tour, 201);
}

public function update(Request $request, string $id)
{
    $tour = Tour::findOrFail($id);
    $data = $request->all();
    $tour->update($data);
    return response()->json($tour);
}

public function destroy($id)
{
    $item = Tour::findOrFail($id);
    $item->delete();
    return response()->json(['message' => 'Tour deleted']);
}
}
