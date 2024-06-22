@extends('admin.layout.master')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-lg-12 margin-tb">
                <div class="pull-left">
                    <h2>Hotel Services</h2>
                </div>
                <div class="pull-right">
                    <a class="btn btn-success" href="{{ route('hotel_services.create') }}"> Create New Hotel Service</a>
                </div>
            </div>
        </div>

        <table class="table table-bordered">
            <tr>
                <th>ID</th>
                <th>Hotel</th>
                <th>Services</th>
                <th width="280px">Action</th>
            </tr>
            @foreach ($hotelServices as $hotelService)
            <tr>
                <td>{{ $hotelService->id }}</td>
                <td>{{ $hotelService->hotel->name }}</td>
                <td>{{ $hotelService->service->service }}</td>
                <td>
                    <form action="{{ route('hotel_services.destroy',$hotelService->id) }}" method="POST">
                        <a class="btn btn-primary" href="{{ route('hotel_services.edit',$hotelService->id) }}">Edit</a>
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