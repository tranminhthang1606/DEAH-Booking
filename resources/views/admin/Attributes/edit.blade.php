@extends('admin.layout.admin')
@section('content')

<form action="{{route('attributes.update',$attribute)}}" enctype="multipart/form-data" method="post">
    @csrf
    @method('PUT')
    <label for="" class="form-label">attribute</label>
    <input type="text" value="{{$attribute->attribute}}" name="attribute" id="attribute" class="form-control">
    @error('attribute')
    <p style="color: red" class="alert">{{$message}}</p>
@enderror
    <button type="submit">Thêm</button>
</form>    
@endsection