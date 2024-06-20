<!-- resources/views/admin/provinces/form.blade.php -->

@extends('layout.admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>{{ isset($province) ? 'Edit Province' : 'Add New Province' }}</h1>
                <div class="card">
                    <div class="card-header">{{ isset($province) ? 'Edit Province' : 'Add New Province' }}</div>
                    <div class="card-body">
                        <form action="{{ isset($province) ? route('admin.provinces.update', $province->id) : route('admin.provinces.store') }}" method="POST">
                            @csrf
                            @if (isset($province))
                                @method('PUT')
                            @endif

                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" name="name" class="form-control" value="{{ isset($province) ? $province->name : '' }}" required>
                            </div>

                            <!-- Add more fields as needed -->

                            <button type="submit" class="btn btn-primary">{{ isset($province) ? 'Update Province' : 'Add Province' }}</button>
                            <a href="{{ route('admin.provinces.index') }}" class="btn btn-secondary">Cancel</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
    