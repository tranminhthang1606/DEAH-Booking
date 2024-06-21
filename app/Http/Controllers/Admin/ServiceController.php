<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Service;
class ServiceController extends Controller
{
    // Lấy danh sách các dịch vụ
    public function index()
    {
        $services = Service::all();
        return response()->json($services);
    }

    // Lấy thông tin chi tiết của một dịch vụ
    public function show($id)
    {
        $service = Service::find($id);
        if ($service) {
            return response()->json($service);
        } else {
            return response()->json(['message' => 'Service not found'], 404);
        }
    }

    // Tạo mới một dịch vụ
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'service' => 'required|string|max:255'
        ]);

        $service = Service::create($validatedData);
        return response()->json($service, 201);
    }

    // Cập nhật một dịch vụ
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'service' => 'required|string|max:255'
        ]);

        $service = Service::find($id);
        if ($service) {
            $service->update($validatedData);
            return response()->json($service);
        } else {
            return response()->json(['message' => 'Service not found'], 404);
        }
    }

    // Xóa một dịch vụ
    public function destroy($id)
    {
        $service = Service::find($id);
        if ($service) {
            $service->delete();
            return response()->json(['message' => 'Service deleted']);
        } else {
            return response()->json(['message' => 'Service not found'], 404);
        }
    }
}
