<!-- resources/views/admin/districts/index.blade.php -->

@extends('layout.admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Manage Districts</h1>
                <a href="{{ route('admin.districts.create') }}" class="btn btn-primary mb-3">Add New District</a>
                <div class="card">
                    <div class="card-header">Districts List</div>
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
                        @if ($errors->any())
                            <script>
                                // Hiển thị alert khi có lỗi validation
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    html: '<ul>@foreach ($errors->all() as $error)<li>{{ $error }}</li>@endforeach</ul>',
                                })
                            </script>
                        @endif
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>province</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($districts as $district)
                                    <tr>
                                        <td>{{ $district->id }}</td>
                                        <td>{{ $district->name }}</td>
                                        <td>{{ $district->province->name }}</td>
                                        <td>

                                            <a href="{{ route('admin.districts.edit', $district->id) }}"
                                                class="btn btn-warning btn-sm">Edit</a>
                                            <form action="{{ route('admin.districts.destroy', $district->id) }}"
                                                method="POST" style="display: inline-block;">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger btn-sm"
                                                    onclick="return confirm('Are you sure you want to delete this district?')">Delete</button>
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
