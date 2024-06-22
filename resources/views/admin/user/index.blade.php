<!-- resources/views/admin/users/index.blade.php -->

@extends('admin.layout.master')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Manage Users</h1>
                <a href="{{ route('users.create') }}" class="btn btn-success mb-3">Add New User</a>
                <div class="card">
                    <div class="card-header">Users List</div>
                    <div class="card-body">
                        @if (session('success'))
                            <div class="alert alert-success">{{ session('success') }}</div>
                        @endif

                        <table class="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>date_of_birth</th>
                                    <th>phone</th>
                                    <th>address</th>
                                    <th>Active</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($users as $user)
                                    <tr>
                                        <td>{{ $user->id }}</td>
                                        <td>{{ $user->name }}</td>
                                        <td>{{ $user->email }}</td>
                                        <td>{{ $user->date_of_birth }}</td>
                                        <td>{{ $user->phone }}</td>
                                        <td>{{ $user->address }}</td>
                                        <td>
                                            @php
                                                echo $user->is_active == 1
                                                    ? '<span class="badge bg-success-subtle text-success text-uppercase">Active</span>'
                                                    : '<span class="badge bg-success-subtle text-danger text-uppercase">Block</span>';
                                            @endphp
                                        </td>
                                        <td>
                                            <a href="{{ route('users.edit', $user->id) }}"
                                                class="btn btn-warning btn-sm">Edit</a>
                                            <form action="{{ route('users.destroy', $user->id) }}" method="POST"
                                                style="display: inline-block;">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger btn-sm"
                                                    onclick="return confirm('Are you sure you want to delete this user?')">Delete</button>
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
