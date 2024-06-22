@extends('admin.layout.master')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Create Hotel Services</h1>
                <div class="card">
                    <div class="card-header">Create Hotel Services</div>
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
                        <form action="{{ route('hotel_services.store') }}" method="POST">
                            @csrf
                            <div class="form-group">
                                <label for="service_id">Service:</label>
                                <select class="form-control" id="service_id" name="service_id" required>
                                    @foreach ($services as $service)
                                        <option value="{{ $service->id }}">{{ $service->service }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="hotel_id">Hotel:</label>
                                <select class="form-control" id="hotel_id" name="hotel_id" required>
                                    @foreach ($hotels as $hotel)
                                        <option value="{{ $hotel->id }}">{{ $hotel->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary">Create Hotel Service</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
