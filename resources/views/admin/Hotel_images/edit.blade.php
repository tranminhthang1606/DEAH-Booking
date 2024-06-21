@extends('admin.layout.master')

@section('content')
  

        <form action="{{ route('hotel_images.update',$hotelImage) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')

            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="form-group">
                        <strong>Hotel:</strong>
                        <select name="hotel_id" class="form-control">
                            <option value="">Select Hotel</option>
                            @foreach ($hotels as $hotel)
                                <option value="{{ $hotel->id }}" {{ $hotelImage->hotel_id == $hotel->id ? 'selected' : '' }}>{{ $hotel->name }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="form-group">
                        <strong>Image:</strong>
                        <input type="file" name="image" class="form-control" placeholder="Image">
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                    <button type="submit" class="btn btn-primary">Update</button>
                </div>
            </div>
        </form>
@endsection