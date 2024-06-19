<!-- resources/views/admin/banners/create.blade.php -->

@extends('layout.admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Create New Banner</h1>
                <div class="card">
                    <div class="card-header">Create Banner</div>
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
                        <form action="{{ route('admin.banners.store') }}" method="POST" enctype="multipart/form-data">
                            @csrf
                            <div class="form-group">
                                <label for="title">Title:</label>
                                <input type="text" class="form-control" id="title" name="title" value="{{ old('title') }}" required>
                            </div>
                            <div class="form-group">
                                <label for="is_active">Active:</label>
                                <select class="form-control" id="is_active" name="is_active" required>
                                    <option value="1">Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="images">Images:</label>
                                <input type="file" class="form-control-file" id="images" name="images[]" accept="image/*" multiple>
                            </div>
                            <button type="submit" class="btn btn-primary">Create Banner</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
