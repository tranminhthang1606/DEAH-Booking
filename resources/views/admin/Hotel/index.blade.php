<!-- resources/views/admin/hotel/index.blade.php -->

@extends('layout.admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Manage Hotels</h1>
                <a href="{{ route('admin.hotels.create') }}" class="btn btn-primary mb-3">Add New Hotel</a>
                <div class="card">
                    <div class="card-header">Hotels List</div>
                    <div class="card-body">
                        @if (session('success'))
                            <div class="alert alert-success">{{ session('success') }}</div>
                        @endif
                        @if (session('error'))
                            <div class="alert alert-danger">{{ session('error') }}</div>
                        @endif

                        <table class="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($hotels as $hotel)
                                    <tr>
                                        <td>{{ $hotel->id }}</td>
                                        <td>{{ $hotel->name }}</td>
                                        <td>{{ $hotel->address }}</td>
                                        <td>
                                            <a href="{{ route('admin.hotels.show', $hotel->id) }}" class="btn btn-primary btn-sm">View</a>
                                            <a href="{{ route('admin.hotels.edit', $hotel->id) }}" class="btn btn-warning btn-sm">Edit</a>
                                            <form action="{{ route('admin.hotels.destroy', $hotel->id) }}" method="POST" style="display: inline-block;">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure you want to delete this hotel?')">Delete</button>
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
