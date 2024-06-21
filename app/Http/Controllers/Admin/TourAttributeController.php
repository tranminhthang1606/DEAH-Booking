<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TourAttribute;

class TourAttributeController extends Controller
{
    public function index()
    {
        $tourAttributes = TourAttribute::all();
        return view('admin.tour_attribute.index', compact('tourAttributes'));
    }

    public function create()
    {
        return view('admin.tour_attribute.create');
    }

    public function store(Request $request)
    {   
        $request->validate([
            'attribute_id' => 'required|exists:attributes,id',
            'tour_id' => 'required|exists:tours,id',
        ]);

        TourAttribute::create($request->all());

        return redirect()->route('admin.tourAttributes.index')->with('success','Tour Attribute created successfully.');
    }

    public function show(TourAttribute $tourAttribute)
    {
        return view('admin.tour_attribute.show', compact('tourAttribute'));
    }

    public function edit(TourAttribute $tourAttribute)
    {
        // Logic để tạo form edit (nếu cần)
    }

    public function update(Request $request, TourAttribute $tourAttribute)
    {
        $request->validate([
            'attribute_id' => 'required|exists:attributes,id',
            'tour_id' => 'required|exists:tours,id',
        ]);

        $tourAttribute->update($request->all());

        return redirect()->route('tourAttributes.index')->with('success','Tour Attribute updated successfully');
    }

    public function destroy(TourAttribute $tourAttribute)
    {
        $tourAttribute->delete();

        return redirect()->route('tourAttributes.index')->with('success','Tour Attribute deleted successfully');
    }
}
