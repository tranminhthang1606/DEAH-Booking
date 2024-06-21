@extends('admin.layout.master')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Manage Wards</h1>
                <a href="{{ route('wards.create') }}" class="btn btn-primary mb-3">Add New Ward</a>
                <div class="card">
                    <div class="card-header">Wards List</div>
                    <div class="card-body">
                        @if (session('success'))
                            <div class="alert alert-success">{{ session('success') }}</div>
                        @endif
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($wards as $ward)
                                    <tr>
                                        <td>{{ $ward->id }}</td>
                                        <td>{{ $ward->name }}</td>
                                        <td>
                                            
                                            <a href="{{ route('wards.edit', $ward->id) }}" class="btn btn-warning btn-sm">Edit</a>
                                            <form action="{{ route('wards.destroy', $ward->id) }}" method="POST" style="display: inline-block;">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure you want to delete this ward?')">Delete</button>
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
