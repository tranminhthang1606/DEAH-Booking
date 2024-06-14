<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\User_voucher;
use App\Models\Voucher;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    public function index()
{
    $users = User::with('vouchers')->get();
    return response()->json($data);
}

public function show(string $id)
{
    $user = User::with('vouchers')->findOrFail($id);
    return response()->json($user);
}
public function addVoucher(Request $request, $user_id)
    {
        // Tìm user theo id
        $user = User::findOrFail($user_id);
        // Tìm voucher theo id từ request
        $voucher = Voucher::findOrFail($request->voucher_id);
        // Tạo đối tượng UserVoucher mới
        $userVoucher = new UserVoucher([
            'voucher_id' => $voucher->id,
            'user_id' => $user->id,
            'using_voucher' => false
        ]);
         // Lưu đối tượng UserVoucher và gắn nó với user
        $user->userVouchers()->save($userVoucher);
        
        return response()->json($userVoucher, 201);
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