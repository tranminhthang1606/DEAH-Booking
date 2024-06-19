@extends('layout.admin')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <a href="{{ route('admin.itineraries.create') }}" class="btn btn-primary mb-3">Add New Itinerary</a>
            <h1>Manage Itineraries</h1>
            <div class="card">
                <div class="card-header">Itineraries List</div>
                <div class="card-body">
                    @if (session('success'))
                        <div class="alert alert-success">{{ session('success') }}</div>
                    @endif
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tour</th>
                                <th>Day</th>
                                <th>Title</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($itineraries as $itinerary)
                                <tr>
                                    <td>{{ $itinerary->id }}</td>
                                    <td>{{ $itinerary->tour->name }}</td>
                                    <td>{{ $itinerary->day }}</td>
                                    <td>{{ $itinerary->title }}</td>
                                    <td>
                                        <a href="{{ route('admin.itineraries.show', $itinerary->id) }}" class="btn btn-primary btn-sm">View</a>
                                        <a href="{{ route('admin.itineraries.edit', $itinerary->id) }}" class="btn btn-warning btn-sm">Edit</a>
                                        <form action="{{ route('admin.itineraries.destroy', $itinerary->id) }}" method="POST" style="display: inline-block;">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure you want to delete this itinerary?')">Delete</button>
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
