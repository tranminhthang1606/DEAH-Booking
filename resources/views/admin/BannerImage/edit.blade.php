@extends('admin.layout.admin')

@section('content')
    <h1>Chỉnh sửa ảnh banner</h1>

    <form action="{{ route('bannerimage.update', $bannerImage) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')

        <div class="form-group">
            <label for="banner_id">Chọn banner</label>
            <select name="banner_id" id="banner_id" class="form-control">
                <option value="">Chọn banner</option>
                @foreach ($banners as $banner)
                    <option value="{{ $banner->id }}" {{ $bannerImage->banner_id == $banner->id ? 'selected' : '' }}>{{ $banner->title }}</option>
                @endforeach
            </select>
            @error('banner_id')
                <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>

        <div class="form-group">
            <label for="image">Ảnh</label>
            <input type="file" name="image" id="image" class="form-control-file">
            @error('image')
                <div class="text-danger">{{ $message }}</div>
            @enderror
        </div>

        <button type="submit" class="btn btn-primary">Lưu</button>
    </form>
@endsection