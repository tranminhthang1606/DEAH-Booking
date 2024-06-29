@extends('admin.layout.master')

@section('content')
    <div class="container">
        <h1>Bookings</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Tour Name</th>
                    <th>Hotel Name</th>
                    <th>Total Price</th>
                    <th>People</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Payment_Status</th>
                    <th>Tour_Status</th>
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
                        <td>{{ $booking->hotel_name }}</td>
                        <td>{{ $booking->total_price }}</td>
                        <td>{{ $booking->people }}</td>
                        <td>{{ $booking->start }}</td>
                        <td>{{ $booking->end }}</td>
                        <td>{{ $booking->status_payment ? 'Confirmed' : 'Pending' }}</td>
                        <td>{{ $booking->status_tour ? 'Done' : 'Waiting' }}</td>
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