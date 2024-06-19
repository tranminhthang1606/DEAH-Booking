<!-- resources/views/admin/provinces/index.blade.php -->

@extends('layout.admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Manage Provinces</h1>
                <a href="{{ route('admin.provinces.create') }}" class="btn btn-primary mb-3">Add New Province</a>
                <div class="card">
                    <div class="card-header">Provinces List</div>
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
                                @foreach ($provinces as $province)
                                    <tr>
                                        <td>{{ $province->id }}</td>
                                        <td>{{ $province->name }}</td>
                                        <td>
                                    
                                            <a href="{{ route('admin.provinces.edit', $province->id) }}" class="btn btn-warning btn-sm">Edit</a>
                                            <form action="{{ route('admin.provinces.destroy', $province->id) }}" method="POST" style="display: inline-block;">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure you want to delete this province?')">Delete</button>
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
