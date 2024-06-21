@extends('admin.layout.master')

@section('content')
    <h1>Edit Post</h1>

    <form action="{{ route('posts.update', $post) }}" method="POST">
        @csrf
        @method('PUT')

        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" name="title" value="{{ $post->title }}">
        </div>

        <div class="form-group">
            <label for="body">Body</label>
            <textarea class="form-control" id="body" name="body">{{ $post->body }}</textarea>
        </div>

        <div class="form-group">
            <label for="thumbnail">Thumbnail</label>
            <input type="text" class="form-control" id="thumbnail" name="thumbnail" value="{{ $post->thumbnail }}">
        </div>

        <button type="submit" class="btn btn-primary">Update</button>
    </form>
@endsection