<?php

namespace App\Http\Controllers;

use App\Models\Provinces;
use Illuminate\Http\Request;

class ApiProvincesController extends Controller
{
    //
    public function index()
    {
        //
        $data =Provinces::all();
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
        Provinces::query()->create($data);
        return response()->json([],204);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $provinces = Provinces::find($id);
        return response()->json($provinces);

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
        $provinces =Provinces::findOrFail($id);
        $data =  $request->all();
        $provinces->update($data);
        return response()->json($data);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $data =  Provinces::find($id);
        $data->delete();
        return response()->json($data);
    }
}
