<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\BannerController;
use App\Http\Controllers\Admin\HotelController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\RateController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\TourAttributeController;
use App\Http\Controllers\Admin\TourCommentController;
use App\Http\Controllers\Admin\TourController;
use App\Http\Controllers\Admin\TourHotelController;
use App\Http\Controllers\Admin\TourTypeController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\VoucherController;
use App\Http\Controllers\Admin\WardController;

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

Route::prefix('admin')->name('admin.')->group(function () {
    Route::apiResource('banners', BannerController::class);
    Route::apiResource('hotels', HotelController::class);
    Route::apiResource('posts', PostController::class);
    Route::apiResource('rates', RateController::class);
    Route::apiResource('services', ServiceController::class);
    Route::apiResource('tourAttributes', TourAttributeController::class);
    Route::apiResource('tourComments', TourCommentController::class);
    Route::apiResource('tours', TourController::class);
    Route::apiResource('tourHotels', TourHotelController::class);
    Route::apiResource('tourTypes', TourTypeController::class);
    Route::apiResource('users', UserController::class);
    Route::apiResource('vouchers', VoucherController::class);
    Route::apiResource('wards', WardController::class);
});


