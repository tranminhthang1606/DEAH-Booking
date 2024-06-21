@extends('admin.layout.master')

@section('content')
    <div class="container">
        <h1>Districts</h1>

        <a href="{{ route('districts.create') }}" class="btn btn-primary mb-3">Create New District</a>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Province</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($districts as $district)
                    <tr>
                        <td>{{ $district->id }}</td>
                        <td>{{ $district->province->name }}</td>
                        <td>{{ $district->name }}</td>
                        <td>
                            <a href="{{ route('districts.show', $district) }}" class="btn btn-info btn-sm">View</a>
                            <a href="{{ route('districts.edit', $district) }}" class="btn btn-primary btn-sm">Edit</a>
                            <form action="{{ route('districts.destroy', $district) }}" method="POST" style="display: inline-block;">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure?')">Delete</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection