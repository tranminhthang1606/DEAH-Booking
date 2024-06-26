<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TourType;
use Illuminate\Http\Request;

class TourTypeController extends Controller
{
    public function index()
    {
        $types = TourType::orderByDesc('created_at')->paginate(10);
        $title = "Tour types list";
        return view('admin.tour_types.index', compact('types', 'title'));
    }



    public function store(Request $request)
    {
        $request->validate(['name_type' => 'required']);
        TourType::create($request->all());
        return redirect()->route('types.index')->with('success', 'Tour type created successfully.');
    }





    public function updateType(Request $request)
    {
        $request->validate(['name_type' => 'required']);
        $tourType = TourType::findOrFail($request->id);
        if ($tourType) {
            $tourType->update($request->all());
            return redirect()->route('types.index')->with('success', 'Tour type updated successfully.');
        }
        return redirect()->route('types.index')->with('error', 'Tour type updated faild.');

    }


    public function destroy($id)
    {
        try {
            TourType::find($id)->delete();
            return redirect()->route('types.index')->with('success', 'Tour type deleted successfully.');

        } catch (\Exception $e) {
            return redirect()->route('types.index')->with('error', 'Tour type can not be deleted');
        }
    }
}

