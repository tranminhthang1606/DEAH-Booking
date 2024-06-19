<!-- resources/views/admin/banners/edit.blade.php -->

@extends('layout.admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Edit Banner</h1>
                <div class="card">
                    <div class="card-header">Edit Banner</div>
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
                        <form action="{{ route('admin.banners.update', $banner->id) }}" method="POST" enctype="multipart/form-data">
                            @csrf
                            @method('PUT')
                            <div class="form-group">
                                <label for="title">Title:</label>
                                <input type="text" class="form-control" id="title" name="title" value="{{ $banner->title }}" required>
                            </div>
                            <div class="form-group">
                                <label for="is_active">Active:</label>
                                <select class="form-control" id="is_active" name="is_active" required>
                                    <option value="1" {{ $banner->is_active ? 'selected' : '' }}>Active</option>
                                    <option value="0" {{ !$banner->is_active ? 'selected' : '' }}>Inactive</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="images">Images:</label>
                                <input type="file" class="form-control-file" id="images" name="images[]" accept="image/*" multiple>
                            </div>
                            <div class="row mb-3">
                                @foreach ($banner->images as $image)
                                    <div class="col-md-3 mb-3">
                                        <img src="{{ asset('storage/' . $image->image) }}" alt="Image" class="img-thumbnail">
                                    </div>
                                @endforeach
                            </div>
                            <button type="submit" class="btn btn-primary">Update Banner</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
