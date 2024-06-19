<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\BannerController;
use App\Http\Controllers\Admin\ProvinceController;
use App\Http\Controllers\Admin\DistrictController;
use App\Http\Controllers\Admin\BannerImageController;
use App\Http\Controllers\Admin\HotelController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\RateController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\TourAttributeController;
use App\Http\Controllers\Admin\ItineraryController;
use App\Http\Controllers\Admin\TourCommentController;
use App\Http\Controllers\Admin\TourController;
use App\Http\Controllers\Admin\TourHotelController;
use App\Http\Controllers\Admin\TourTypeController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\VoucherController;
use App\Http\Controllers\Admin\WardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::prefix('admin')->name('admin.')->group(function () {
    Route::resource('banners', BannerController::class);
    Route::resource('banners_images', BannerImageController::class);
    Route::resource('provinces', ProvinceController::class);
    Route::resource('districts', DistrictController::class);
    Route::resource('hotels', HotelController::class);
    Route::resource('posts', PostController::class);
    Route::resource('rates', RateController::class);
    Route::resource('services', ServiceController::class);
    Route::resource('tourAttributes', TourAttributeController::class);
    Route::resource('itineraries', ItineraryController::class);
    Route::resource('tourComments', TourCommentController::class);
    Route::resource('tours', TourController::class);
    Route::resource('tourHotels', TourHotelController::class);
    Route::resource('tourTypes', TourTypeController::class);
    Route::resource('users', UserController::class);
    Route::resource('vouchers', VoucherController::class);
    Route::resource('wards', WardController::class);
});
