@extends('admin.layout.master')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Manage Tour Attributes</h1>
                <a href="{{ route('tourAttributes.create') }}" class="btn btn-primary mb-3">Add New Tour Attribute</a>
                <div class="card">
                    <div class="card-header">Tour Attributes List</div>
                    <div class="card-body">
                        <script>
                            @if (session('success'))
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success',
                                    text: '{{ session('success') }}',
                                });
                            @endif

                            @if ($errors->any())
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Error',
                                    html: '{!! implode('<br>', $errors->all()) !!}',
                                });
                            @endif
                        </script>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Attribute</th>
                                    <th>Tour</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($tourAttributes as $tourAttribute)
                                    <tr>
                                        <td>{{ $tourAttribute->id }}</td>
                                        <td>{{ $tourAttribute->attribute->attribute }}</td>
                                        <td>{{ $tourAttribute->tour->title }}</td>
                                        <td>
                                            <a href="{{ route('tourAttributes.edit', $tourAttribute->id) }}"
                                                class="btn btn-warning btn-sm">Edit</a>
                                            <form action="{{ route('tourAttributes.destroy', $tourAttribute->id) }}"
                                                method="POST" style="display: inline-block;">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger btn-sm"
                                                    onclick="return confirm('Are you sure you want to delete this tour attribute?')">Delete</button>
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
