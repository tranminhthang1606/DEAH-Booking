<?php

namespace App\Http\Controllers;

use App\Models\Wards;
use Illuminate\Console\View\Components\Warn;
use Illuminate\Http\Request;

class ApiWardController extends Controller
{
    //
    public function index()
    {
        //
        $data =Wards::all();
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
         Wards::query()->create($data);
        return response()->json([],204);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $ward = Wards::find($id);
        return response()->json($ward);

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
        $ward =Wards::findOrFail($id);
        $data =  $request->all();
        $ward->update($data);
        return response()->json($data);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $data = Wards::find($id);
        $data->delete();
        return response()->json($data);
    }
}
