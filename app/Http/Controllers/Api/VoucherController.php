<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Voucher;
use Illuminate\Http\Request;

class VoucherController extends Controller
{
    //
    public function index()
{
    $data = Voucher::all();
    return response()->json($data);
}

public function show(string $id)
{
    $voucher = Voucher::findOrFail($id);
    return response()->json($voucher);
}

public function store(Request $request)
{
    $data = $request->all();
    $voucher = Voucher::query()->create($data);
    return response()->json($voucher, 201);
}

public function update(Request $request, string $id)
{
    $voucher = Voucher::findOrFail($id);
    $data = $request->all();
    $voucher->update($data);
    return response()->json($voucher);
}

public function destroy($id)
{
    $item = Voucher::findOrFail($id);
    $item->delete();
    return response()->json(['message' => 'Voucher deleted']);
}
}
