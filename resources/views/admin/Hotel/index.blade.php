@extends('admin.layout.master')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0">Hotels</h4>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="{{ route('hotels.index') }}">Hotels</a></li>
                                <li class="breadcrumb-item active"><a href="{{ route('hotels.index') }}">List</a></li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <h3 class="card-header">{{ $title }}</h3>
                <a href="{{ route('hotels.create') }}" class="btn btn-primary mb-3">Add New Hotel</a>

                <div class="card-body">
                    <div class="table-responsive card">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Promotion</th>
                                    <th>Province</th>
                                    <th>Status</th>
                                    <th>Active</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($hotels as $index => $hotel)
                                    <tr>
                                        <td>{{ $index + 1 }}</td>
                                        <td>{{ $hotel->name }}</td>
                                        <td>{{ number_format($hotel->price, 0, '.', '.') }} VND</td>
                                        <td>{{ number_format($hotel->promotion, 0, '.', '.') }} VND</td>
                                        <td>{{ $hotel->province->name }}</td>

                                        <td>
                                            @php
                                                echo $hotel->status == 1
                                                    ? '<span class="badge bg-success-subtle text-success text-uppercase">Available</span>'
                                                    : '<span class="badge bg-success-subtle text-danger text-uppercase">Full</span>';
                                            @endphp
                                        </td>
                                        <td>
                                            @php
                                                echo $hotel->is_active == 1
                                                    ? '<span class="badge bg-success-subtle text-success text-uppercase">Active</span>'
                                                    : '<span class="badge bg-success-subtle text-danger text-uppercase">Block</span>';
                                            @endphp
                                        </td>
                                        <td>
                                            <a class="btn btn-primary btn-sm dropdownButton"
                                                href="{{ route('hotels.show', ['hotel' => $hotel->id]) }}"
                                                data-target="dropdownMenu{{ $hotel->id }}">View</a>
                                            {{-- <div id="dropdownMenu{{ $hotel->id }}" class="dropdown-menu"
                                                    style="display: none;">
                                                    <a class="dropdown-item"
                                                        href="{{ route('hotel_images.show', $hotel->id) }}">Images</a>
                                                    <a class="dropdown-item"
                                                        href="{{ route('hotel_services.show', $hotel->id) }}">Services</a>
                                                    <a class="dropdown-item"
                                                        href="{{ route('hotel_comments.show', $hotel->id) }}">Comments</a>
    
                                                </div> --}}
                                            <form action="{{ route('hotels.destroy', $hotel->id) }}" method="POST"
                                                style="display: inline-block;">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger btn-sm"
                                                    onclick="return confirm('Are you sure?');">Delete</button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                        {{ $hotels->links() }}

                    </div>


                </div>
            </div>
        </div>
    </div>
@endsection
