<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    //
    public function index()
    {
        $data = Service::all();
        return response()->json($data);
    }
    
    public function show(string $id)
    {
        $service = Service::findOrFail($id);
        return response()->json($service);
    }
    
    public function store(Request $request)
    {
        $data = $request->all();
        $service = Service::query()->create($data);
        return response()->json($service, 201);
    }
    
    public function update(Request $request, string $id)
    {
        $service = Service::findOrFail($id);
        $data = $request->all();
        $service->update($data);
        return response()->json($service);
    }
    
    public function destroy($id)
    {
        $item = Service::findOrFail($id);
        $item->delete();
        return response()->json(['message' => 'Service deleted']);
    }
}
