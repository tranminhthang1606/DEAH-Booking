@extends('admin.layout.master')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">{{ __('Hotels') }}</div>
                    <a href="{{ route('hotels.create') }}" class="btn btn-info btn-sm">Create Hotel</a>

                    <div class="card-body">
                        @if (session('success'))
                            <div class="alert alert-success" role="alert">
                                {{ session('success') }}
                            </div>
                        @endif

                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Promotion</th>
                                    <th>Province</th>
                                    <th>District</th>
                                    <th>Ward</th>
                                    <th>Address</th>
                                    <th>Status</th>
                                    <th>Is_active</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($hotels as $hotel)
                                    <tr>
                                        <td>{{ $hotel->id }}</td>
                                        <td>{{ $hotel->name }}</td>
                                        <td>{{ $hotel->price }}</td>
                                        <td>{{ $hotel->promotion }}</td>
                                        <td>{{ $hotel->province->name }}</td>
                                        <td>{{ $hotel->district->name }}</td>
                                        <td>{{ $hotel->ward->name }}</td>
                                        <td>{{ $hotel->address }}</td>
                                        <td>{{ $hotel->status }}</td>
                                        <td>
                                            @php
                                                echo $hotel->is_active == 1
                                                    ? '<span class="badge bg-success-subtle text-success text-uppercase">Active</span>'
                                                    : '<span class="badge bg-success-subtle text-danger text-uppercase">Block</span>';
                                            @endphp
                                        </td>
                                        <td>
                                            <a class="btn btn-primary btn-sm dropdownButton"
                                                data-target="dropdownMenu{{ $hotel->id }}">View</a>
                                            <div id="dropdownMenu{{ $hotel->id }}" class="dropdown-menu"
                                                style="display: none;">
                                                <a class="dropdown-item"
                                                    href="{{ route('hotel_images.show', $hotel->id) }}">Images</a>
                                                <a class="dropdown-item"
                                                    href="{{ route('hotel_services.show', $hotel->id) }}">Services</a>
                                                <a class="dropdown-item"
                                                    href="{{ route('hotel_comments.show', $hotel->id) }}">Comments</a>

                                            </div>
                                            <a href="{{ route('hotels.edit', $hotel) }}"
                                                class="btn btn-primary btn-sm">Edit</a>
                                            <form action="{{ route('hotels.destroy', $hotel) }}" method="POST"
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
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
    <script>
        document.querySelectorAll('.dropdownButton').forEach(button => {
            button.addEventListener('click', function() {
                var hideAll = document.querySelectorAll('.dropdown-menu');
                var targetId = this.getAttribute('data-target');
                var dropdownMenu = document.getElementById(targetId);
                if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
                    hideAll.forEach(item => {
                        item.style.display = 'none';
                    });
                    dropdownMenu.style.display = 'block';
                } else {
                    dropdownMenu.style.display = 'none';
                }
            });
        });
    </script>
@endsection
