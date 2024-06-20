<!-- resources/views/admin/banners/create.blade.php -->
@extends('layouts.main')

@section('content')
    <h1>Add New Banner</h1>
    <form action="{{ route('admin.Hotel.store') }}" method="POST">
        @csrf
        <button type="submit" class="btn btn-success">Save</button>
    </form>
@endsection
