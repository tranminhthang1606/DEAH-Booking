<?php

use App\Http\Controllers\Admin\HotelController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\TourController;
use App\Http\Controllers\Admin\VoucherController;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'cors'], function () {

    //route admin
    Route::apiResource('/post', PostController::class);
    Route::apiResource('/hotel', HotelController::class);
    Route::apiResource('/tour', TourController::class);
    Route::apiResource('/voucher', VoucherController::class);
});

