<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return view('admin.Posts.index', compact('posts'));
    }

    public function create()
    {
        return view('admin.Posts.add');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'body' => 'required',
            'thumbnail' => 'required|image|max:2048',
        ]);

        $post = new Post();
        $post->title = $validatedData['title'];
        $post->body = $validatedData['body'];

        if ($request->hasFile('thumbnail')) {
            $thumbnail = $request->file('thumbnail');
            $thumbnailPath = $thumbnail->store('public/posts');
            $post->thumbnail = str_replace('public/', '', $thumbnailPath);
        }

        $post->view = 0;
        $post->status = 1;
        $post->save();

        return redirect()->route('posts.index')->with('success', 'Post created successfully.');
    }

    public function show(Post $post)
    {
        return view('posts.show', compact('post'));
    }

    public function edit(Post $post)
    {
        return view('admin.Posts.edit', compact('post'));
    }

    public function update(Request $request, Post $post)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'body' => 'required',
            'thumbnail' => 'nullable|image|max:2048',
        ]);

        $post->title = $validatedData['title'];
        $post->body = $validatedData['body'];

        if ($request->hasFile('thumbnail')) {
            if ($post->thumbnail) {
                Storage::delete('public/' . $post->thumbnail);
            }
            $thumbnail = $request->file('thumbnail');
            $thumbnailPath = $thumbnail->store('public/posts');
            $post->thumbnail = str_replace('public/', '', $thumbnailPath);
        }

        $post->save();

        return redirect()->route('posts.index')->with('success', 'Post updated successfully.');
    }

    public function destroy(Post $post)
    {
        if ($post->thumbnail) {
            Storage::delete('public/' . $post->thumbnail);
        }
        $post->delete();

        return redirect()->route('posts.index')->with('success', 'Post deleted successfully.');
    }
}