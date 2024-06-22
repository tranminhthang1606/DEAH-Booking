@extends('admin.layout.master')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h1>Edit Itinerary</h1>
            <div class="card">
                <div class="card-header">Edit Itinerary</div>
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
                    <form action="{{ route('itineraries.update', $itinerary->id) }}" method="POST">
                        @csrf
                        @method('PUT')
                        <div class="form-group">
                            <label for="tour_id">Tour:</label>
                            <select class="form-control" id="tour_id" name="tour_id" required>
                                @foreach ($tours as $tour)
                                    <option value="{{ $tour->id }}" {{ $tour->id == $itinerary->tour_id ? 'selected' : '' }}>{{ $tour->title }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="day">Day:</label>
                            <input type="number" class="form-control" id="day" name="day" value="{{ $itinerary->day }}" required>
                        </div>
                        <div class="form-group">
                            <label for="title">Title:</label>
                            <input type="text" class="form-control" id="title" name="title" value="{{ $itinerary->title }}" required>
                        </div>
                        <div class="form-group">
                            <label for="itinerary">Itinerary:</label>
                            <textarea class="form-control" id="itinerary" name="itinerary" rows="4" required>{{ $itinerary->itinerary }}</textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Update Itinerary</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
