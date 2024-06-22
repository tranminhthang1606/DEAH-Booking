<!-- resources/views/admin/tours/index.blade.php -->
@extends('admin.layout.master')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Manage Tours</h1>
                <a href="{{ route('tours.create') }}" class="btn btn-primary mb-3">Add New Tour</a>
                <div class="card">
                    <div class="card-header">Tours List</div>
                    <div class="card-body">
                        @if (session('success'))
                            <script>
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success',
                                    text: '{{ session('success') }}',
                                });
                            </script>
                        @endif
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Type</th>
                                    <th>Province</th>
                                    <th>District</th>
                                    <th>Ward</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Promotion</th>
                                    <th>Active</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($tours as $tour)
                                    <tr>
                                        <td>{{ $tour->id }}</td>
                                        <td>{{ $tour->title }}</td>
                                        <td>{{ $tour->types->name_type }}</td>
                                        <td>{{ $tour->provinces->name }}</td>
                                        <td>{{ $tour->districts->name }}</td>
                                        <td>{{ $tour->wards->name }}</td>
                                        <td>{{ $tour->description }}</td>
                                        <td>{{ $tour->price }}</td>
                                        <td>{{ $tour->promotion }}</td>
                                        <td>
                                            @php
                                                echo $tour->is_active == 1
                                                    ? '<span class="badge bg-success-subtle text-success text-uppercase">Active</span>'
                                                    : '<span class="badge bg-success-subtle text-danger text-uppercase">Block</span>';
                                            @endphp
                                        </td>
                                        <td>
                                            <a class="btn btn-primary btn-sm dropdownButton"
                                                data-target="dropdownMenu{{ $tour->id }}">View</a>
                                            <div id="dropdownMenu{{ $tour->id }}" class="dropdown-menu"
                                                style="display: none;">
                                                <a class="dropdown-item"
                                                    href="{{ route('tourAttributes.show', $tour->id) }}">Attributes</a>
                                                <a class="dropdown-item"
                                                    href="{{ route('tourHotels.show', $tour->id) }}">Hotels</a>
                                                <a class="dropdown-item"
                                                    href="{{ route('tourComments.show', $tour->id) }}">Comments</a>
                                                <a class="dropdown-item"
                                                    href="{{ route('itineraries.show', $tour->id) }}">Itineraries</a>
                                            </div>
                                            <a href="{{ route('tours.edit', $tour->id) }}"
                                                class="btn btn-warning btn-sm">Edit</a>
                                            <form action="{{ route('tours.destroy', $tour->id) }}" method="POST"
                                                style="display: inline-block;">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger btn-sm"
                                                    onclick="return confirm('Are you sure you want to delete this tour?')">Delete</button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                        {{ $tours->links() }}

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
