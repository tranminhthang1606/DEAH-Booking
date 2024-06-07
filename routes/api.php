<?php

use App\Http\Controllers\ApiBannerController;
use App\Http\Controllers\ApiImage_bannerController;
use App\Http\Controllers\ApiPostController;
use App\Http\Controllers\ApiTagController;
use App\Http\Controllers\ApiUserController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TourController;
use App\Http\Controllers\VoucherController;
use App\Models\Hotel;
use App\Models\Tour;
use App\Models\Voucher;
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
Route::apiResource('/posts',ApiPostController::class);
Route::apiResource('/tags',ApiTagController::class);
Route::apiResource('/banners',ApiBannerController::class);
Route::apiResource('/images_banner',ApiImage_bannerController::class);
Route::apiResource('/users',ApiUserController::class);
Route::apiResource('/post',PostController::class);
Route::apiResource('/hotel',HotelController::class);
Route::apiResource('/tour',TourController::class);
Route::apiResource('/voucher',VoucherController::class);

});

