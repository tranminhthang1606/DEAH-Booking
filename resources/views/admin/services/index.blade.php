@extends('admin.layout.master')
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Manage Services</h1>
                <a href="{{ route('services.create') }}" class="btn btn-primary mb-3">Add New Service</a>
                <div class="card">
                    <div class="card-header">Services List</div>
                    <div class="card-body">
                        @if (session('success'))
                            <script>
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success',
                                    text: '{{ session('success') }}',
                                });
                            </script>
                        @endif
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Service</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($services as $service)
                                    <tr>
                                        <td>{{ $service->id }}</td>
                                        <td>{{ $service->service }}</td>                                    
                                        <td>
                                           
                                            <a href="{{ route('services.edit', $service->id) }}"
                                                class="btn btn-warning btn-sm">Edit</a>
                                            <form action="{{ route('services.destroy', $service->id) }}" method="POST"
                                                style="display: inline-block;">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger btn-sm"
                                                    onclick="return confirm('Are you sure you want to delete this tour?')">Delete</button>
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