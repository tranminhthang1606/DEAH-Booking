<?php

use App\Http\Controllers\Admin\AttributeController;
use App\Http\Controllers\Admin\BannerImageController;
use App\Http\Controllers\Admin\BookingController;
use App\Http\Controllers\Admin\DistrictController;
use App\Http\Controllers\Admin\Hotel_CommentController;
use App\Http\Controllers\Admin\Hotel_ImageController;
use App\Http\Controllers\Admin\HotelController;
use App\Http\Controllers\Admin\Post_CommentController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\ProvinceController;
use App\Models\BannerImages;
use App\Models\Province;
use Illuminate\Support\Facades\Route;

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
Route::resource('/attributes',AttributeController::class);
Route::resource('/bannerimage',BannerImageController::class);
Route::resource('/bookings',BookingController::class);
Route::resource('/provinces',ProvinceController::class);
Route::resource('/districts',DistrictController::class);
Route::resource('/hotels',HotelController::class);
Route::resource('/hotel_comments',Hotel_CommentController::class);
Route::resource('/hotel_images',Hotel_ImageController::class);
Route::resource('/posts',PostController::class);
Route::resource('/post_comments',Post_CommentController::class);











