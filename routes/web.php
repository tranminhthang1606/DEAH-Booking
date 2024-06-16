<?php

use App\Http\Controllers\Admin\DashBoardController;
use App\Http\Controllers\Admin\TourTypeController;
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
