<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ResponseJson;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    //
    protected $response;
    public function __construct(ResponseJson $response)
    {
        $this->response = $response;
    }
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);
        if ($validator->fails()) {
            return $this->response->responseFailed($validator->errors()->first());
        }
        $user = [
            'email' => $request->email,
            'password' => $request->password,
            'is_active' => 1
        ];
        if (Auth::attempt($user)) {
            // $request->session()->regenerate();
            Auth::user()->token = Hash::make(Auth::user()->id);
            return $this->response->responseSuccess(Auth::user());
        } else {
            return $this->response->responseFailed('Tài khoản không tồn tại hoặc chưa được kích hoạt');

        }

    }
    public function signup(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6'
        ]);
        if ($validator->fails()) {
            return $this->response->responseFailed($validator->errors()->first());
        }
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        if ($user) {
            return $this->response->responseSuccess($request->all(), 'Đăng ký thành công');
        } else {
            return $this->response->responseFailed('Đăng ký thất bại');
        }
    }
    public function update(Request $request, $token)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => ['required', 'email', Rule::unique('users')->ignore(Auth::user()->id)],
            'file' => 'nullable|image',
            'date_of_birth' => 'nullable|date|after:' . now()->toDateString(). "'",
            'phone' => 'nullable|regex:/^(0[0-9]{9,10})$/',
            'address' => 'nullable',
        ]);

        if ($validator->fails()) {
            return $this->response->responseFailed($validator->errors()->first());
        }
        if (Hash::check(Auth::user()->id, $token)) {
            if ($request->hasFile('file')) {
                $image = $request->file('file');
                $imageName = "storage/tours/" . time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('storage/tours'), $imageName);
                $request->merge(['avarta' => $imageName]);
                $user = User::find(Auth::user()->id)->update($request->all());
                if ($user) {
                    return $this->response->responseSuccess($request->all(), 'Cập nhật thành công');
                }
                return $this->response->responseFailed('Cập nhật thất bại');
            } else {
                $user = User::find(Auth::user()->id)->update($request->all());
                if ($user) {
                    return $this->response->responseSuccess($request->all(), 'Cập nhật thành công');
                }
                return $this->response->responseFailed('Cập nhật thất bại');

            }
        } else {
            return $this->response->responseFailed('Token không hợp lệ');
        }


    }
    public function logout()
    {
        Auth::logout();
        return $this->response->responseSuccess([], 'Đăng xuất thành công');
    }
}
