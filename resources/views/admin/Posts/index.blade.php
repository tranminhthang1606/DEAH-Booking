@extends('admin.layout.admin')

@section('content')
  
                        <table class="table table-striped">
                            <a href="{{ route('posts.create') }}" class="btn btn-primary btn-sm">View</a>

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
                                        <td>{{ $post->thumbnail }}</td>
                                        <td>{{ $post->views }}</td>
                                        <td>{{ $post->status }}</td>
                                        <td>
                                            <a href="{{ route('posts.show', $post) }}" class="btn btn-primary btn-sm">View</a>
                                            <a href="{{ route('posts.edit', $post) }}" class="btn btn-secondary btn-sm">Edit</a>
                                            <form action="{{ route('posts.destroy', $post) }}" method="POST" style="display: inline-block;">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure?')">Delete</button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                
@endsection