@extends('admin.layout.master')

@section('content')
    <table class="table table-striped">
        <a href="{{ route('posts.create') }}" class="btn btn-primary btn-sm">Add post</a>

        <thead>
            <tr>
                <th>Title</th>
                <th>Thumbnail</th>
                <th>Views</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($posts as $post)
                <tr>
                    <td>{{ $post->title }}</td>
                    <td><img src="{{ $post->thumbnail }}" width="100" height="50" alt=""></td>
                    <td>{{ $post->views }}</td>
                    <td> @php
                        echo $post->is_active == 1
                            ? '<span class="badge bg-success-subtle text-success text-uppercase">Active</span>'
                            : '<span class="badge bg-success-subtle text-danger text-uppercase">Block</span>';
                    @endphp</td>
                    <td>
                        <a href="{{ route('posts.show', $post) }}" class="btn btn-primary btn-sm">View</a>
                        <a href="{{ route('posts.edit', $post) }}" class="btn btn-secondary btn-sm">Edit</a>
                        <form action="{{ route('posts.destroy', $post) }}" method="POST" style="display: inline-block;">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger btn-sm"
                                onclick="return confirm('Are you sure?')">Delete</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
