@extends('admin.layout.master')
@section('content')
    <form action="{{ route('attributes.store') }}" enctype="multipart/form-data" method="post">
        @csrf
        <label for="" class="form-label">Attribute</label>
        <input type="text" name="attribute" id="attribute" class="form-control">
        <button type="submit">Thêm</button>
        @error('attribute')
            <p style="color: red" class="alert">{{ $message }}</p>
        @enderror
    </form>
@endsection
