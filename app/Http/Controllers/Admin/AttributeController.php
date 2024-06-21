<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Attribute;
use Illuminate\Http\Request;

class AttributeController extends Controller
{
    //
    public function index()
    {
        $attribute = Attribute::all();
        return view('admin.Attributes.index', compact('attribute'));
    }

   
    public function create()
    {
        return view('admin.Attributes.add');
    }


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'attribute' => 'required|max:255',
        ]);

        Attribute::create($validatedData);

        return redirect()->route('attributes.index')
                        ->with('success', 'Attribute created successfully.');
    }

    public function show(Attribute $attribute)
    {
        return view('attributes.show', compact('attribute'));
    }

  
    public function edit(Attribute $attribute)
    {
        return view('admin.Attributes.edit', compact('attribute'));
    }


    public function update(Request $request, Attribute $attribute)
    {
        $validatedData = $request->validate([
            'attribute' => 'required|max:255',
        ]);

        $attribute->update($validatedData);

        return redirect()->route('attributes.index')
                        ->with('success', 'Attribute updated successfully.');
    }


    public function destroy(Attribute $attribute)
    {
        $attribute->delete();

        return redirect()->route('attributes.index')
                        ->with('success', 'Attribute deleted successfully.');
    }
}
