@extends('admin.layout.admin')

@section('content')
    <h1>Create New Post Comment</h1>

    <form action="{{ route('post_comments.store') }}" method="POST">
        @csrf

        <div>
            <label for="comments">Comments</label>
            <textarea name="comments" id="comments" required></textarea>
        </div>

        <div>
            <label for="post_id">Post</label>
            <select name="post_id" id="post_id" required>
                <option value="">Select a post</option>
                @foreach ($posts as $post)
                    <option value="{{ $post->id }}">{{ $post->title }}</option>
                @endforeach
            </select>
        </div>

        <div>
            <label for="user_id">User</label>
            <select name="user_id" id="user_id" required>
                <option value="">Select  user</option>
                @foreach ($users as $user)
                    <option value="{{ $user->id }}">{{ $user->name }}</option>
                @endforeach
            </select>
        </div>

        <button type="submit">Create</button>

    </form>
@endsection