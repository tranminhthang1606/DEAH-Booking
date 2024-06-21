@extends('admin.layout.master')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Tour Attribute Details</h1>
                <div class="card">
                    <div class="card-header">Tour Attribute Details</div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="attribute_id">Attribute ID:</label>
                            <input type="text" class="form-control" id="attribute_id" name="attribute_id" value="{{ $tourAttribute->attribute_id }}" readonly>
                        </div>
                        <div class="form-group">
                            <label for="tour_id">Tour ID:</label>
                            <input type="text" class="form-control" id="tour_id" name="tour_id" value="{{ $tourAttribute->tour_id }}" readonly>
                        </div>
                        <a href="{{ route('tour-attributes.index') }}" class="btn btn-secondary">Back</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
