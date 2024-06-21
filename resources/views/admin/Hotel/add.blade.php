@extends('admin.layout.master')
@section('content')
<h1>Add Hotel</h1>
<form method="POST" action="{{ route('hotels.store') }}" enctype="multipart/form-data">
    @csrf

    <div class="form-group row">
        <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>
        <div class="col-md-6">
            <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
            @error('name')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>
    </div>

    <div class="form-group row">
        <label for="price" class="col-md-4 col-form-label text-md-right">{{ __('Price') }}</label>
        <div class="col-md-6">
            <input id="price" type="number" class="form-control @error('price') is-invalid @enderror" name="price" value="{{ old('price') }}" required autocomplete="price">
            @error('price')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>
    </div>

    <div class="form-group row">
        <label for="promotion" class="col-md-4 col-form-label text-md-right">{{ __('Promotion') }}</label>
        <div class="col-md-6">
            <input id="promotion" type="text" class="form-control @error('promotion') is-invalid @enderror" name="promotion" value="{{ old('promotion') }}" required autocomplete="promotion">
            @error('promotion')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>
    </div>

    <div class="form-group row">
        <label for="description" class="col-md-4 col-form-label text-md-right">{{ __('Description') }}</label>
        <div class="col-md-6">
            <textarea id="description" class="form-control @error('description') is-invalid @enderror" name="description" required autocomplete="description">{{ old('description') }}</textarea>
            @error('description')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>
    </div>

    <div class="form-group row">
        <label for="province_id" class="col-md-4 col-form-label text-md-right">{{ __('Province') }}</label>
        <div class="col-md-6">
            <select id="province_id" class="form-control @error('province_id') is-invalid @enderror" name="province_id" required>
                <option value="">Select Province</option>
                @foreach ($provinces as $province)
                    <option value="{{ $province->id }}">{{ $province->name }}</option>
                @endforeach
            </select>
            @error('province_id')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>
    </div>

    <div class="form-group row">
        <label for="district_id" class="col-md-4 col-form-label text-md-right">{{ __('District') }}</label>
        <div class="col-md-6">
            <select id="district_id" class="form-control @error('district_id') is-invalid @enderror" name="district_id" required>
                <option value="">Select District</option>
            
            </select>
            @error('district_id')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>
    </div>

    <div class="form-group row">
        <label for="ward_id" class="col-md-4 col-form-label text-md-right">{{ __('Ward') }}</label>
        <div class="col-md-6">
            <select id="ward_id" class="form-control @error('ward_id') is-invalid @enderror" name="ward_id" required>
                <option value="">Select Ward</option>
                @foreach ($wards as $ward)
                    <option value="{{ $ward->id }}">{{ $ward->name }}</option>
                @endforeach
            </select>
        </div>
    </div>

    <div class="form-group row">
        <label for="address" class="col-md-4 col-form-label text-md-right">{{ __('Address') }}</label>
        <div class="col-md-6">
            <input id="address" type="text" class="form-control @error('address') is-invalid @enderror" name="address" value="{{ old('address') }}" required autocomplete="address" autofocus>
            @error('address')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>
    </div>

    <div class="form-group row">
        <label for="status" class="col-md-4 col-form-label text-md-right">{{ __('Status') }}</label>
        <div class="col-md-6">
            <input id="status" type="text" class="form-control @error('status') is-invalid @enderror" name="status" value="{{ old('status') }}" required autocomplete="status" autofocus>
            @error('status')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>
    </div>

    <button type="submit">Gửi</button>
</form>
                     <script>
                        $(document).ready(function() {
    $('#province_id').on('change', function() {
        var provinceId = $(this).val();
        console.log(province_id);
        $.ajax({
            url: '{{route("districts",["province_id"=>'+provinceId+'])}}',
            type: 'GET',
            success: function(data) {
                $('#district_id').empty();
                $('#district_id').append('<option value="">Select District</option>');
                $.each(data, function(key, value) {
                    $('#district_id').append('<option value="' + value.id + '">' + value.name + '</option>');
                });
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    });
});
                     </script>
@endsection
