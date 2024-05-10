<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class ApiRoleController extends Controller
{
    //
    public function index()
    {
        //
        $data = Role::all();
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
        Role::query()->create($data);
        return response()->json([],204);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $role =  Role::find($id);
        return response()->json($role);

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
        $role = Role::findOrFail($id);
        $data =  $request->all();
        $role->update($data);
        return response()->json($data);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $data =  Role::find($id);
        $data->delete();
        return response()->json($data);
    }
}
