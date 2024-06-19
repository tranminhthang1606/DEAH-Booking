@extends('admin.layout.admin')

@section('content')
    <div class="container">
        <h1>Edit Booking</h1>

        <form action="{{ route('bookings.update', $booking->id) }}" method="POST">
            @csrf
            @method('PUT')

            <div class="form-group">
                <label for="user_name">User Name</label>
                <input type="text" name="user_name" id="user_name" class="form-control" value="{{ $booking->user_name }}" required>
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" class="form-control" value="{{ $booking->email }}" required>
            </div>

            <div class="form-group">
                <label for="tour_name">Tour Name</label>
                <input type="text" name="tour_name" id="tour_name" class="form-control" value="{{ $booking->tour_name }}" required>
            </div>

            <div class="form-group">
                <label for="tour_price">Tour Price</label>
                <input type="number" name="tour_price" id="tour_price" class="form-control" value="{{ $booking->tour_price }}" required>
            </div>

            <div class="form-group">
                <label for="tour_address">Tour Address</label>
                <input type="text" name="tour_address" id="tour_address" class="form-control" value="{{ $booking->tour_address }}" required>
            </div>

            <div class="form-group">
                <label for="hotel_name">Hotel Name</label>
                <input type="text" name="hotel_name" id="hotel_name" class="form-control" value="{{ $booking->hotel_name }}" required>
            </div>

            <div class="form-group">
                <label for="hotel_price">Hotel Price</label>
                <input type="number" name="hotel_price" id="hotel_price" class="form-control" value="{{ $booking->hotel_price }}" required>
            </div>

            <div class="form-group">
                <label for="book_price">Book Price</label>
                <input type="number" name="book_price" id="book_price" class="form-control" value="{{ $booking->book_price }}" required>
            </div>

            <div class="form-group">
                <label for="promotion_price">Promotion Price</label>
                <input type="number" name="promotion_price" id="promotion_price" class="form-control" value="{{ $booking->promotion_price }}" required>
            </div>

            <div class="form-group">
                <label for="total_price">Total Price</label>
                <input type="number" name="total_price" id="total_price" class="form-control" value="{{ $booking->total_price }}" required>
            </div>

            <div class="form-group">
                <label for="people">People</label>
                <input type="number" name="people" id="people" class="form-control" value="{{ $booking->people }}" required>
            </div>

            <div class="form-group">
                <label for="start">Start Date</label>
                <input type="date" name="start" id="start" class="form-control" value="{{ $booking->start }}" required>
            </div>

            <div class="form-group">
                <label for="end">End Date</label>
                <input type="date" name="end" id="end" class="form-control" value="{{ $booking->end }}" required>
            </div>

        

            <button type="submit" class="btn btn-primary">Update Booking</button>
        </form>
    </div>
@endsection