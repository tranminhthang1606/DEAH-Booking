@extends('admin.layout.admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-lg-12 margin-tb">
                <div class="pull-left">
                    <h2>Hotel Images</h2>
                </div>
                <div class="pull-right">
                    <a class="btn btn-success" href="{{ route('hotel_images.create') }}"> Create New Hotel Image</a>
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
                <th>Hotel</th>
                <th>Image</th>
                <th width="280px">Action</th>
            </tr>
            @foreach ($hotelImages as $hotelImage)
            <tr>
                <td>{{ $hotelImage->id }}</td>
                <td>{{ $hotelImage->hotel_id }}</td>
                <td><img src="{{ asset('images/'.$hotelImage->image) }}" width="100px"></td>
                <td>
                    <form action="{{ route('hotel_images.destroy',$hotelImage->id) }}" method="POST">
                        <a class="btn btn-info" href="{{ route('hotel_images.show',$hotelImage->id) }}">Show</a>
                        <a class="btn btn-primary" href="{{ route('hotel_images.edit',$hotelImage->id) }}">Edit</a>
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