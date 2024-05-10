<?php

namespace App\Http\Controllers;

use App\Models\District;
use Illuminate\Http\Request;

class ApiDistrictController extends Controller
{
    //
    public function index()
    {
        //
        $data = District::all();
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     */
 

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $data =  $request->except('');
        District::query()->create($data);
        return response()->json([],204);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $district =  District::find($id);
        return response()->json($district);

    }

    /**
     * Show the form for editing the specified resource.
     */

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $district = District::findOrFail($id);
        $data =  $request->all();
        $district->update($data);
        return response()->json($data);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $data =  District::find($id);
        $data->delete();
        return response()->json($data);
    }
}
