<!-- resources/views/admin/users/show.blade.php -->

@extends('layouts.main')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>User Details</h1>
                <div class="card">
                    <div class="card-header">User Details</div>
                    <div class="card-body">
                        <p><strong>Name:</strong> {{ $user->name }}</p>
                        <p><strong>Email:</strong> {{ $user->email }}</p>
                        <p><strong>Created At:</strong> {{ $user->created_at }}</p>
                        <p><strong>Updated At:</strong> {{ $user->updated_at }}</p>
                        <a href="{{ route('admin.users.edit', $user->id) }}" class="btn btn-primary">Edit User</a>
                        <form action="{{ route('admin.users.destroy', $user->id) }}" method="POST" style="display: inline-block;">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger" onclick="return confirm('Are you sure you want to delete this user?')">Delete User</button>
                        </form>
                    </div>
                </div>
