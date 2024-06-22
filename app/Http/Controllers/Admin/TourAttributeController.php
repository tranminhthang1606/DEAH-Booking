<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Attribute;
use App\Models\Tour;
use Illuminate\Http\Request;
use App\Models\TourAttribute;
use Illuminate\Validation\Rule;

class TourAttributeController extends Controller
{
    public function index()
    {

        $tourAttributes = TourAttribute::all();
        return view('admin.tour_attribute.index', compact('tourAttributes'));
    }

    public function create()
    {
        $attributes = Attribute::all();
        $tours = Tour::all();
        return view('admin.tour_attribute.create', compact('attributes', 'tours'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'attribute_id' => 'required|exists:attributes,id',
            'tour_id' => [
                'required',
                Rule::unique('tour_attribute')->where(function ($query) use ($request) {
                    return $query->where('tour_id', $request->tour_id);
                }),
            ],
        ]);

        TourAttribute::create($request->all());

        return redirect()->route('tourAttributes.show', $request->tour_id)->with('success', 'Tour Attribute created successfully.');
    }

    public function show($id)
    {

        $tourAttributes = TourAttribute::where('tour_id', $id)->get();
        return view('admin.tour_attribute.show', compact('tourAttributes'));
    }

    public function edit(TourAttribute $tourAttribute)
    {
        // Logic để tạo form edit (nếu cần)
    }

    public function update(Request $request, TourAttribute $tourAttribute)
    {
        $request->validate([
            'attribute_id' => 'required|exists:attributes,id',
            'tour_id' => [
                'required',
                Rule::unique('tour_attribute')->where(function ($query) use ($request) {
                    return $query->where('tour_id', $request->tour_id);
                }),
            ],
        ]);

        $tourAttribute->update($request->all());

        return redirect()->route('tourAttributes.show', $request->tour_id)->with('success', 'Tour Attribute updated successfully');
    }

    public function destroy(TourAttribute $tourAttribute)
    {
        $tourAttribute->delete();

        return redirect()->back()->with('success', 'Tour Attribute deleted successfully');
    }
}
