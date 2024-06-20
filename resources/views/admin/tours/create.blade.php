<!-- resources/views/admin/tours/create.blade.php -->
@extends('layout.admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Create New Tour</h1>
                <div class="card">
                    <div class="card-header">Create Tour</div>
                    <div class="card-body">
                        @if ($errors->any())
                            <div class="alert alert-danger">
                                <ul>
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif
                        <form action="{{ route('admin.tours.store') }}" method="POST">
                            @csrf
                            <div class="form-group">
                                <label for="title">Title:</label>
                                <input type="text" class="form-control" id="title" name="title" required>
                            </div>
                            <div class="form-group">
                                <label for="type_id">Type:</label>
                                <select class="form-control" id="type_id" name="type_id" required>
                                    @foreach ($tourTypes as $type)
                                        <option value="{{ $type->id }}">{{ $type->name_type }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="province_id">Province:</label>
                                <select class="form-control" id="province_id" name="province_id" required>
                                    @foreach ($provinces as $province)
                                        <option value="{{ $province->id }}">{{ $province->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="district_id">district:</label>
                                <select class="form-control" id="district_id" name="district_id" required>
                                    @foreach ($districts as $district)
                                        <option value="{{ $district->id }}">{{ $district->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="ward_id">ward:</label>
                                <select class="form-control" id="ward_id" name="ward_id" required>
                                    @foreach ($wards as $wards)
                                        <option value="{{ $wards->id }}">{{ $wards->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="title">description:</label>
                                <input type="text" class="form-control" id="description" name="description" required>
                            </div>
                            <div class="form-group">
                                <label for="title">price:</label>
                                <input type="text" class="form-control" id="price" name="price" required>
                            </div>
                            <div class="form-group">
                                <label for="title">romotion:</label>
                                <input type="text" class="form-control" id="romotion" name="romotion" required>
                            </div>
                            <!-- Add more fields as needed -->
                            <button type="submit" class="btn btn-primary">Create Tour</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
