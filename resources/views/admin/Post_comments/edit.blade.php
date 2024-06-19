@extends('admin.layout.admin')

@section('content')
    <h1>Edit Post Comment</h1>

    <form action="{{ route('post_comments.update', $postComment->id) }}" method="POST">
        @csrf
        @method('PUT')

        <div>
            <label for="comments">Comments</label>
            <textarea name="comments" id="comments" required>{{ $postComment->comments }}</textarea>
        </div>

        <div>
            <label for="post_id">Post</label>
            <select name="post_id" id="post_id" required>
                <option value="">Select a post</option>
                @foreach ($posts as $post)
                    <option value="{{ $post->id }}" @if ($postComment->post_id == $post->id) selected @endif>{{ $post->title }}</option>
                @endforeach
            </select>
        </div>

        <div>
            <label for="user_id">User</label>
            <select name="user_id" id="user_id" required>
                <option value="">Select a user</option>
                @foreach ($users as $user)
                    <option value="{{ $user->id }}" @if ($postComment->user_id == $user->id) selected @endif>{{ $user->name }}</option>
                @endforeach
            </select>
        </div>

        <button type="submit">Update</button>
    </form>
@endsection