@extends('admin.layout.master')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-lg-12 margin-tb">
                <div class="pull-left">
                    <h2>Hotel Comments</h2>
                </div>
                <div class="pull-right">
                    <a class="btn btn-success" href="{{ route('hotel_comments.create') }}"> Create New Hotel Comment</a>
                </div>
            </div>
        </div>

        @if ($message = Session::get('success'))
            <div class="alert alert-success">
                <p>{{ $message }}</p>
            </div>
        @endif

        <table class="table table-bordered">
            <tr>
                <th>ID</th>
                <th>Comments</th>
                <th>Hotel</th>
                <th>User</th>
                <th width="280px">Action</th>
            </tr>
            @foreach ($hotelComments as $hotelComment)
            <tr>
                <td>{{ $hotelComment->id }}</td>
                <td>{{ $hotelComment->comments }}</td>
                <td>{{ $hotelComment->hotel->name }}</td>
                <td>{{ $hotelComment->user->name }}</td>
                <td>
                    <form action="{{ route('hotel_comments.destroy',$hotelComment->id) }}" method="POST">
                        <a class="btn btn-primary" href="{{ route('hotel_comments.edit',$hotelComment->id) }}">Edit</a>
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger">Delete</button>
                    </form>
                </td>
            </tr>
            @endforeach
        </table>
    </div>
@endsection