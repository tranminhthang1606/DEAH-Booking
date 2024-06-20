@extends('admin.layout.admin')

@section('content')
    <div class="container">
        <h1>Create District</h1>

        <form action="{{ route('districts.store') }}" method="POST">
            @csrf

            <div class="form-group">
                <label for="province_id">Province</label>
                <select class="form-control" id="province_id" name="province_id">
                    <option value="">Select a province</option>
                    @foreach ($provinces as $province)
                        <option value="{{ $province->id }}">{{ $province->name }}</option>
                    @endforeach
                </select>
            </div>

            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" name="name" required>
            </div>

            <button type="submit" class="btn btn-primary">Create District</button>
        </form>
    </div>
@endsection