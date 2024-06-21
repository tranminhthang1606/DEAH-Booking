@extends('layout.admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Create Tour Attribute</h1>
                <div class="card">
                    <div class="card-header">Create Tour Attribute</div>
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
                        <form action="{{ route('tourAttributes.store') }}" method="POST">
                            @csrf
                            <div class="form-group">
                                <label for="attribute_id">Attribute:</label>
                                <input type="number" class="form-control" id="attribute_id" name="attribute_id" value="{{ old('attribute_id') }}" required>
                            </div>
                            <div class="form-group">
                                <label for="tour_id">Tour:</label>
                                <input type="number" class="form-control" id="tour_id" name="tour_id" value="{{ old('tour_id') }}" required>
                            </div>
                            <button type="submit" class="btn btn-primary">Create Tour Attribute</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
