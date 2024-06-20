@extends('layout.admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Edit Ward</h1>
                <div class="card">
                    <div class="card-header">Edit Ward</div>
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
                        <form action="{{ route('admin.wards.update', $ward->id) }}" method="POST">
                            @csrf
                            @method('PUT')
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input type="text" class="form-control" id="name" name="name" value="{{ $ward->name }}" required>
                            </div>
                            <div class="form-group">
                                <label for="district_id">District:</label>
                                <select class="form-control" id="district_id" name="district_id" required>
                                    @foreach ($districts as $district)
                                        <option value="{{ $district->id }}" {{ $ward->district_id == $district->id ? 'selected' : '' }}>{{ $district->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary">Update Ward</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
