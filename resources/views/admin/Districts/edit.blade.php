@extends('admin.layout.master')

@section('content')
    <div class="container">
        <h1>Edit District</h1>

        <form action="{{ route('districts.update', $district) }}" method="POST">
            @csrf
            @method('PUT')

            <div class="form-group">
                <label for="province_id">Province</label>
                <select class="form-control" id="province_id" name="province_id">
                    <option value="">Select a province</option>
                    @foreach ($provinces as $province)
                        <option value="{{ $province->id }}" {{ $district->province_id == $province->id ? 'selected' : '' }}>{{ $province->name }}</option>
                    @endforeach
                </select>
            </div>

            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" name="name" value="{{ $district->name }}" required>
            </div>

            <button type="submit" class="btn btn-primary">Update District</button>
        </form>
    </div>
@endsection