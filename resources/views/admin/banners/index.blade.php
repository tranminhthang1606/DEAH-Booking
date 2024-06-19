@extends('layout.admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Manage Banners</h1>
                <a href="{{ route('admin.banners.create') }}" class="btn btn-primary mb-3">Add New Banner</a>
                <div class="card">
                    <div class="card-header">Banners List</div>
                    <div class="card-body">
                        @if (session('success'))
                            <div class="alert alert-success">{{ session('success') }}</div>
                        @endif
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Status</th>
                                    <th>Images</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($banners as $banner)
                                    <tr>
                                        <td>{{ $banner->id }}</td>
                                        <td>{{ $banner->title }}</td>
                                        <td>{{ $banner->is_active ? 'Active' : 'Inactive' }}</td>
                                        <td>
                                            @foreach ($banner->images as $image)
                                                <img src="{{ asset('storage/' . $image->image) }}" alt="Image" style="max-width: 100px;">
                                            @endforeach
                                        </td>
                                        <td>
                                            <a href="{{ route('admin.banners.show', $banner->id) }}" class="btn btn-primary btn-sm">View</a>
                                            <a href="{{ route('admin.banners.edit', $banner->id) }}" class="btn btn-warning btn-sm">Edit</a>
                                            <form action="{{ route('admin.banners.destroy', $banner->id) }}" method="POST" style="display: inline-block;">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure you want to delete this banner?')">Delete</button>
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
