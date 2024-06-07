<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ResponseJson extends Controller
{
    //
    public function responseSuccess($data = [])
    {
        return response()->json([
            'data' => $data,
            'message' => 'Success',
            'status' => 200
        ]);
    }
    public function responseFaild()
    {
        return response()->json([
            'data' => [],
            'message' => 'Failed',
            'status' => 400
        ]);
    }
}
