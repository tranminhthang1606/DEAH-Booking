@extends('admin.layout.master')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h1>Create Itinerary</h1>
            <div class="card">
                <div class="card-header">Create Itinerary</div>
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
                    <form action="{{ route('itineraries.store') }}" method="POST">
                        @csrf
                        <div class="form-group">
                            <label for="tour_id">Tour:</label>
                            <select class="form-control" id="tour_id" name="tour_id" required>
                                @foreach ($tours as $tour)
                                    <option value="{{ $tour->id }}">{{ $tour->title }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="day">Day:</label>
                            <input type="number" class="form-control" id="day" name="day" value="{{ old('day') }}" required>
                        </div>
                        <div class="form-group">
                            <label for="title">Title:</label>
                            <input type="text" class="form-control" id="title" name="title" value="{{ old('title') }}" required>
                        </div>
                        <div class="form-group">
                            <label for="itinerary">Itinerary:</label>
                            <textarea class="form-control" id="itinerary" name="itinerary" rows="4" required>{{ old('itinerary') }}</textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Create Itinerary</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
