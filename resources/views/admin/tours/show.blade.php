<!-- resources/views/admin/tours/show.blade.php -->
@extends('layout.admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Tour Details</h1>
                <div class="card">
                    <div class="card-header">{{ $tour->title }}</div>
                    <div class="card-body">
                        <p><strong>Type:</strong> {{ $tour->types->name }}</p>
                        <p><strong>Province:</strong> {{ $tour->province->name }}</p>
                        <!-- Add more details as needed -->
                    </div>
                </div>
                <div class="mt-3">
                    <a href="{{ route('admin.tours.edit', $tour->id) }}" class="btn btn-warning">Edit</a>
                    <form action="{{ route('admin.tours.destroy', $tour->id) }}" method="POST" style="display: inline-block;">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-danger" onclick="return confirm('Are you sure you want to delete this tour?')">Delete</button>
                    </form>
                    <a href="{{ route('admin.tours.index') }}" class="btn btn-secondary">Back to List</a>
                </div>
            </div>
        </div>
    </div>
@endsection
