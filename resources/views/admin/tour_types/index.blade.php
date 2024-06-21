@extends('layout.admin')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h1>Manage Tour Types</h1>
            <a href="{{ route('tour_types.create') }}" class="btn btn-primary mb-3">Create New Tour Type</a>
            <div class="card">
                <div class="card-header">Tour Types List</div>
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
                                <th>Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($tourTypes as $tourType)
                                <tr>
                                    <td>{{ $tourType->id }}</td>
                                    <td>{{ $tourType->name_type }}</td>
                                    <td>
                                        <a href="{{ route('tour_types.show', $tourType->id) }}" class="btn btn-primary btn-sm">View</a>
                                        <a href="{{ route('tour_types.edit', $tourType->id) }}" class="btn btn-warning btn-sm">Edit</a>
                                        <form action="{{ route('tour_types.destroy', $tourType->id) }}" method="POST" style="display: inline-block;">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure you want to delete this tour type?')">Delete</button>
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
