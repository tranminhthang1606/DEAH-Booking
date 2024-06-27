@extends('admin.layout.master')
@section('content')
    <div class="container">
        <div class="row">
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h1>Manage Posts</h1>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="{{ route('posts.index') }}">Posts</a></li>
                                <li class="breadcrumb-item active"><a href="F{{ route('posts.index') }}">List</a></li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-12 card">
                <div class="">
                    <h3 class="card-header">{{ $title }}</h3>
                    <a href="{{ route('posts.create') }}" class="btn btn-primary mb-3">Add New Posst</a>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Thumbnail</th>
                                    <th>Title</th>
                                    <th>Active</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($posts as $index => $post)
                                    <tr>
                                        <td>{{ $index + 1 }}</td>
                                        <td>
                                            <img src="{{ asset($post->thumbnail) }}" alt="" width="100px"
                                                height="100px">
                                        </td>
                                        <td>{{ $post->title }}</td>
                                        <td>
                                            @php
                                                echo $post->is_active == 1
                                                    ? '<span class="badge bg-success-subtle text-success text-uppercase">Active</span>'
                                                    : '<span class="badge bg-success-subtle text-danger text-uppercase">Block</span>';
                                            @endphp
                                        </td>
                                        <td>
                                            <a name="" id="" class="btn btn-primary btn-sm" href="{{ route('posts.show', $post->id) }}"
                                                role="button">Show</a>
                                            <a name="" id="" class="btn btn-warning btn-sm"
                                                href="{{ route('posts.edit', $post->id) }}" role="button">Edit</a>
                                            <form action="{{ route('posts.destroy', $post->id) }}" method="POST"
                                                style="display: inline-block;">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger btn-sm"
                                                    onclick="return confirm('Are you sure you want to delete this post?')">Delete</button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                        {{ $posts->links() }}
                    </div>
                </div>

            </div>

        </div>

    </div>
@endsection
