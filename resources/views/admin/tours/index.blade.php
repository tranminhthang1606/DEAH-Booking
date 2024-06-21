<!-- resources/views/admin/tours/index.blade.php -->
@extends('layout.admin')

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
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($tours as $tour)
                                    <tr>
                                        <td>{{ $tour->id }}</td>
                                        <td>{{ $tour->title }}</td>
                                        <td>{{ $tour->types ? $tour->types->name_type : 'N/A' }}</td>
                                        <td>{{ $tour->province ? $tour->province->name : 'N/A' }}</td>
                                        <td>{{ $tour->districts ? $tour->districts->name : 'N/A' }}</td>
                                        <td>{{ $tour->ward ? $tour->ward->name : 'N/A' }}</td>
                                        <td>{{ $tour->description }}</td>
                                        <td>{{ $tour->price }}</td>
                                        <td>{{ $tour->promotion }}</td>
                                        <td>
                                            <a href="{{ route('tours.show', $tour->id) }}"
                                                class="btn btn-primary btn-sm">View</a>
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
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
