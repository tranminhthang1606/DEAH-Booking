<!-- resources/views/admin/banners/show.blade.php -->

@extends('layout.admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Banner Details</h1>
                <div class="card">
                    <div class="card-header">Banner Details</div>
                    <div class="card-body">
                        <div class="mb-3">
                            <strong>Title:</strong> {{ $banner->title }}
                        </div>
                        <div class="mb-3">
                            <strong>Active:</strong> {{ $banner->is_active ? 'Active' : 'Inactive' }}
                        </div>
                        <div class="mb-3">
                            <strong>Images:</strong>
                            <div class="row">
                                @foreach ($banner->images as $image)
                                    <div class="col-md-3 mb-3">
                                        <img src="{{ asset('storage/' . $image->image) }}" alt="Image" class="img-thumbnail">
                                    </div>
                                @endforeach
                            </div>
                        </div>
                        <a href="{{ route('admin.banners.index') }}" class="btn btn-primary">Back to List</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
