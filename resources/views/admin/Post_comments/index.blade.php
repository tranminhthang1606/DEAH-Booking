@extends('admin.layout.master')

@section('content')
    <h1>Post Comments</h1>

    <table class="table table-striped">

        <a href="{{ route('posts.create') }}" class="btn btn-primary btn-sm">View</a>

        <thead>
            <tr>
                <th>ID</th>
                <th>Comments</th>
                <th>Post ID</th>
                <th>User ID</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($postComments as $postComment)
                <tr>
                    <td>{{ $postComment->id }}</td>
                    <td>{{ $postComment->comments }}</td>
                    <td>{{ $postComment->post_id }}</td>
                    <td>{{ $postComment->user_id }}</td>
                    <td>
                        <a href="{{ route('post_comments.edit', $postComment->id) }}">Edit</a>
                        <form action="{{ route('post_comments.destroy', $postComment->id) }}" method="POST"
                            style="display: inline;">
                            @csrf
                            @method('DELETE')
                            <button type="submit">Delete</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>



    <a href="{{ route('post_comments.create') }}">Create New Comment</a>
@endsection
