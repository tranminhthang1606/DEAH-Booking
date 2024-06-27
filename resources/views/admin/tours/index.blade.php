@extends('admin.layout.master')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0">Tours</h4>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="{{ route('tours.index') }}">Tours</a></li>
                                <li class="breadcrumb-item active"><a href="{{ route('tours.index') }}">List</a></li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <h3 class="card-header">{{ $title }}</h3>
                <a href="{{ route('tours.create') }}" class="btn btn-primary mb-3">Add New Tours</a>

                <div class="card-body">
                    <div class="table-responsive card">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                    <th>Day</th>
                                    <th>Price</th>
                                    <th>Promotion</th>
                                    <th>Province</th>
                                    <th>Active</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($tours as $index => $tour)
                                    <tr>
                                        <td>{{ $index + 1 }}</td>
                                        <td style="max-height: 100px; overflow: hidden">{{ $tour->title }}</td>
                                        <td>{{ $tour->day }}</td>
                                        <td>{{ number_format($tour->price, 0, '.', '.') }} VND</td>
                                        <td>{{ number_format($tour->promotion, 0, '.', '.') }} VND</td>
                                        <td>{{ $tour->provinces->name }}</td>

                                        <td>
                                            @php
                                                echo $tour->is_active == 1
                                                    ? '<span class="badge bg-success-subtle text-success text-uppercase">Active</span>'
                                                    : '<span class="badge bg-success-subtle text-danger text-uppercase">Block</span>';
                                            @endphp
                                        </td>
                                        <td>
                                            <a class="btn btn-primary btn-sm dropdownButton"
                                                href="{{ route('tours.show', ['tour' => $tour->id]) }}"
                                                data-target="dropdownMenu{{ $tour->id }}">View</a>
                                            <form action="{{ route('tours.destroy', $tour->id) }}" method="POST"
                                                style="display: inline-block;">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger btn-sm"
                                                    onclick="return confirm('Are you sure?');">Delete</button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                        {{ $tours->links() }}

                    </div>


                </div>
            </div>
        </div>
    </div>
@endsection
