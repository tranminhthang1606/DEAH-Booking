<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    public function index()
{
    $data = User::all();
    return response()->json($data);
}

public function show(string $id)
{
    $user = User::findOrFail($id);
    return response()->json($user);
}

public function store(Request $request)
{
    $data = $request->all();
    $user = User::query()->create($data);
    return response()->json($user, 201);
}

public function update(Request $request, string $id)
{
    $user = User::findOrFail($id);
    $data = $request->all();
    $user->update($data);
    return response()->json($user);
}

public function destroy($id)
{
    $item = User::findOrFail($id);
    $item->delete();
    return response()->json(['message' => 'User deleted']);
}
}
