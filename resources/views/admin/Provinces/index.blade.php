@extends('admin.layout.master')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Provinces</div>
                    <a href="{{route('provinces.create')}}">Create provinces new</a>

                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($provinces as $province)
                                    <tr>
                                        <td>{{ $province->id }}</td>
                                        <td>{{ $province->name }}</td>
                                        <td>
                                            <a href="{{ route('provinces.show', $province->id) }}" class="btn btn-primary btn-sm">View</a>
                                            <a href="{{ route('provinces.edit', $province->id) }}" class="btn btn-secondary btn-sm">Edit</a>
                                            <form action="{{ route('provinces.destroy', $province->id) }}" method="POST" style="display: inline-block;">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure?')">Delete</button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection