<?php


use App\Http\Controllers\Admin\AttributeController;
use App\Http\Controllers\Admin\BookingController;
use App\Http\Controllers\Admin\Hotel_CommentController;
use App\Http\Controllers\Admin\Hotel_ImageController;
use App\Http\Controllers\Admin\HotelController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\TourController;
use App\Http\Controllers\Admin\TourTypeController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\VoucherController;
use App\Http\Controllers\Admin\HotelServiceController;
use App\Http\Controllers\LocationController;
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
    return redirect()->route('admin.index');
});
Route::group(['prefix' => 'admin'], function () {
    Route::get("/", function () {
        return view('admin.dashboard', ['title' => "Dashboard"]);
    })->name('admin.index');
    //Hotels
    Route::resource('/hotels', HotelController::class);
    Route::get('/services', [ServiceController::class, 'index'])->name('services.index');
    Route::post('/services/store', [ServiceController::class, 'store'])->name('services.store');
    Route::put('/services/update', [ServiceController::class, 'update'])->name('services.update');
    Route::delete('/services/destroy/{id}', [ServiceController::class, 'destroy'])->name('services.destroy');
    Route::resource('/hotel_services', HotelServiceController::class);
    Route::resource('/hotel_images', Hotel_ImageController::class);
    Route::resource('/hotel_comments', Hotel_CommentController::class);
    //Tours
    Route::resource('/types', TourTypeController::class);
    Route::put('/type/update', [TourTypeController::class, 'updateType'])->name('type.update');
    Route::resource('/tours', TourController::class);
    Route::post('/tour/add-attributes', [TourController::class, 'addAttributes'])->name('addAttributes.store');
    Route::post('/tour/del-attributes', [TourController::class, 'delAttribute'])->name('delAttribute.destroy');
    Route::post('/tour/add-image', [TourController::class, 'addImage'])->name('addImage.store');
    Route::post('/tour/del-image/{id}', [TourController::class, 'delImage'])->name('delImage.destroy');
    Route::post('/tour/add-hotels', [TourController::class, 'addHotels'])->name('addHotels.store');
    Route::post('/tour/del-hotel', [TourController::class, 'delHotel'])->name('delHotel.destroy');
    Route::post('/tour/add-itinerary', [TourController::class, 'addItinerary'])->name('addItinerary.store');
    Route::post('/tour/update-itinerary', [TourController::class, 'updateItinerary'])->name('updateItinerary.update');
    Route::post('/tour/del-itinerary/{id}', [TourController::class, 'delItinerary'])->name('delItinerary.destroy');
    Route::post('/tour/del-comment/{id}', [TourController::class, 'delComment'])->name('delComment.destroy');
    Route::post('/tour/del-rate/{id}', [TourController::class, 'delRate'])->name('delRate.destroy');
    Route::get('/get-itinerary/{id}', [TourController::class, 'getItinerary']);

    Route::resource('/attributes', AttributeController::class);
    //Posts
    Route::resource('/posts', PostController::class);
    //Vouchers
    Route::resource('/vouchers', VoucherController::class);
    //Bookings
    Route::resource('/bookings', BookingController::class);
    //User
    Route::get('/users',[UserController::class,'index'])->name('users.index');
    Route::post('/users/update',[UserController::class,'update'])->name('users.update');
    Route::delete('/users/delete/{id}',[UserController::class,'index'])->name('users.destroy');


});
Route::get('/get-districts/{province_id}', [LocationController::class, 'getDistricts'])->name('districts');
Route::get('/get-wards/{district_id}', [LocationController::class, 'getWards'])->name('wards');
Route::get('/get-hotels/{province_id}', [HotelController::class, 'getHotelByProvince']);







