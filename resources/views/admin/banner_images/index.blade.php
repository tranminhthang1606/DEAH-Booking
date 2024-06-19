@extends('layout.admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Manage Banners</h1>
                <a href="{{ route('admin.banners.create') }}" class="btn btn-primary mb-3">Add New Banner</a>
                <div class="card">
                    <div class="card-header">Banners List</div>
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
                                    <th>Banner ID</th>
                                    <th>Images</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($images as $img)
                                    <tr>
                                        <td>{{ $img->id }}</td>
                                        <td>{{ $img->banner_id }}</td>
                                        <td>
                                            @if ($img->image)
                                                <img src="{{ asset('storage/' . $img->image) }}" alt="Banner Image" style="max-width: 100px;">
                                            @else
                                                No Image
                                            @endif
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
