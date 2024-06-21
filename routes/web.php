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
use App\Models\BannerImages;
use App\Models\Province;
use App\Http\Controllers\Admin\DashBoardController;
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

Route::group(['prefix'=>'admin'],function(){
    Route::get("/",function(){
        return view('admin.dashboard',['title'=>"Dashboard"]);
    })->name('admin.index');
    Route::resource('tour_types',TourTypeController::class);
});
Route::prefix('/')->group(function () {
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
Route::resource('/districts', DistrictController::class);



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


// Route::resource('/rates', RateController::class);
// Route::resource('/services', ServiceController::class);
// Route::resource('/tourAttributes', TourAttributeController::class);
// Route::resource('/itineraries', ItineraryController::class);
// Route::resource('/tourComments', TourCommentController::class);
// Route::resource('/tours', TourController::class);
// Route::resource('/tourHotels', TourHotelController::class);
// Route::resource('/tourTypes', TourTypeController::class);
// Route::resource('/users', UserController::class);
// Route::resource('/vouchers', VoucherController::class);
// Route::resource('/wards', WardController::class);







