<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;


class BookingController extends Controller
{
  
    public function index()
    {
        $bookings = Booking::all();
        return view('admin.Bookings.index', compact('bookings'));
    }

    public function create()
    {
        return view('admin.Bookings.add');
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_name' => 'required',
            'email' => 'required|email',
            'tour_name' => 'required',
            'tour_price' => 'required|numeric',
            'tour_address' => 'required|numeric',
            'hotel_name' => 'required',
            'hotel_price' => 'required|numeric',
            'book_price' => 'required|numeric',
            'promotion_price' => 'required|numeric',
            'total_price' => 'required|numeric',
            'people' => 'required|numeric',
            'start' => 'required|date',
            'end' => 'required|date',
        ]);

        $booking = Booking::create($request->all());
        return redirect()->route('bookings.index')->with('success', 'Booking created successfully.');
    }



    public function edit(Booking $booking)
    {
        return view('admin.Bookings.edit', compact('booking'));
    }


    public function update(Request $request, Booking $booking)
    {
        $request->validate([
            'user_name' => 'required',
            'email' => 'required|email',
            'tour_name' => 'required',
            'tour_price' => 'required|numeric',
            'tour_address' => 'required',
            'hotel_name' => 'required',
            'hotel_price' => 'required|numeric',
            'book_price' => 'required|numeric',
            'promotion_price' => 'required|numeric',
            'total_price' => 'required|numeric',
            'people' => 'required|numeric',
            'start' => 'required|date',
            'end' => 'required|date',
        ]);

        $booking->update($request->all());
        return redirect()->route('bookings.index')->with('success', 'Booking updated successfully.');
    }


    public function destroy(Booking $booking)
    {
        $booking->delete();
        return redirect()->route('bookings.index')->with('success', 'Booking deleted successfully.');
    }

}
