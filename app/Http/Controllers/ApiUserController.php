<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ApiUserController extends Controller
{
    //
    public function index()
    {
        //
        $data = User::all();
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
        User::query()->create($data);
        return response()->json([],204);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $user =  User::find($id);
        return response()->json($user);

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
        $user = User::findOrFail($id);
        $data =  $request->all();
        $user->update($data);
        return response()->json($data);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $data =  User::find($id);
        $data->delete();
        return response()->json($data);
    }
}
