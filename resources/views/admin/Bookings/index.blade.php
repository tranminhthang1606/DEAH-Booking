@extends('admin.layout.admin')

@section('content')
    <div class="container">
        <h1>Bookings</h1>

        <a href="{{ route('bookings.create') }}" class="btn btn-primary mb-3">Create New Booking</a>

        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Tour Name</th>
                    <th>Tour Price</th>
                    <th>Hotel Name</th>
                    <th>Hotel Price</th>
                    <th>Book Price</th>
                    <th>Promotion Price</th>
                    <th>Total Price</th>
                    <th>People</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($bookings as $booking)
                    <tr>
                        <td>{{ $booking->id }}</td>
                        <td>{{ $booking->user_name }}</td>
                        <td>{{ $booking->email }}</td>
                        <td>{{ $booking->tour_name }}</td>
                        <td>{{ $booking->tour_price }}</td>
                        <td>{{ $booking->hotel_name }}</td>
                        <td>{{ $booking->hotel_price }}</td>
                        <td>{{ $booking->book_price }}</td>
                        <td>{{ $booking->promotion_price }}</td>
                        <td>{{ $booking->total_price }}</td>
                        <td>{{ $booking->people }}</td>
                        <td>{{ $booking->start }}</td>
                        <td>{{ $booking->end }}</td>
                        <td>{{ $booking->status ? 'Confirmed' : 'Pending' }}</td>
                        <td>
                            <a href="{{ route('bookings.show', $booking) }}" class="btn btn-primary btn-sm">View</a>
                            <a href="{{ route('bookings.edit', $booking) }}" class="btn btn-secondary btn-sm">Edit</a>
                            <form action="{{ route('bookings.destroy', $booking) }}" method="POST" class="d-inline">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure?')">Delete</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection