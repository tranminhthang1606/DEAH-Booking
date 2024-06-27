<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\PostComment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::orderByDesc('created_at')->paginate(10);
        $title = "Posts list";
        return view('admin.Posts.index', compact('posts', 'title'));
    }

    public function create()
    {
        $title = "Post add";
        return view('admin.Posts.add', compact('title'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'body' => 'required',
            'file' => 'required|max:2048|image',
            'is_active' => 'nullable'
        ]);
        $request->is_active ? $request->is_active : $request->merge(['is_active' => 0]);
        $thumbnail = $request->file('file');
        $imageName = "storage/posts/" . time() . '.' . $thumbnail->getClientOriginalExtension();
        $thumbnail->move(public_path('storage/posts'), $imageName);
        $request->merge(['thumbnail' => $imageName]);
        $request->merge(['views' => 0]);
        Post::create($request->all());
        return redirect()->route('posts.index')->with('success', 'Post created successfully.');
    }

    public function show(Post $post)
    {   
        $title = "Post show";

        return view('admin.Posts.show', compact('post','title'));
    }

    public function edit(Post $post)
    {
        $title = "Post edit";
        return view('admin.Posts.edit', compact('title', 'post'));
    }

    public function update(Request $request, Post $post)
    {
        $request->validate([
            'title' => 'required',
            'body' => 'required',
            'is_active' => 'nullable'
        ]);
        $request->is_active ? $request->is_active : $request->merge(['is_active' => 0]);

        if ($request->hasFile('file')) {
            if ($post->thumbnail) {
                Storage::delete($post->thumbnail);
            }
            $thumbnail = $request->file('file');
            $imageName = "storage/posts/" . time() . '.' . $thumbnail->getClientOriginalExtension();
            $thumbnail->move(public_path('storage/posts'), $imageName);
            $request->merge(['thumbnail' => $imageName]);
            $post->update($request->all());
        } else {
            $post->update($request->all());
        }


        return redirect()->route('posts.index')->with('success', 'Post updated successfully.');
    }

    public function destroy(Post $post)
    {
        if ($post->thumbnail) {
            Storage::delete('public/' . $post->thumbnail);
        }
        PostComment::where('post_id', $post->id)->delete();
        $post->delete();

        return redirect()->route('posts.index')->with('success', 'Post deleted successfully.');
    }
}