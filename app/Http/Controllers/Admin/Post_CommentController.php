<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\PostComment;
use App\Models\User;
use Illuminate\Http\Request;

class Post_CommentController extends Controller

    //

{
  
    public function index()
    {
        $postComments = PostComment::all();
        return view('admin.Post_comments.index', compact('postComments'));
    }

    public function create()
    {
        $posts = Post::all();
        $users = User::all();
        return view('admin.Post_comments.add', compact('posts', 'users'));
    }


    public function store(Request $request)
    {
        $request->validate([
            'comments' => 'required',
            'post_id' => 'required|exists:posts,id',
            'user_id' => 'required|exists:users,id',
        ]);

        PostComment::create([
            'comments' => $request->input('comments'),
            'post_id' => $request->input('post_id'),
            'user_id' => $request->input('user_id'),
        ]);

        return redirect()->route('post_comments.index')->with('success', 'Comment created successfully.');
    }

    public function edit(PostComment $postComment)
    {
        $posts = Post::all();
        $users = User::all();
        return view('admin.Post_comments.edit', compact('postComment', 'posts', 'users'));
    }

  
    public function update(Request $request, PostComment $postComment)
    {
        $request->validate([
            'comments' => 'required',
            'post_id' => 'required|exists:posts,id',
            'user_id' => 'required|exists:users,id',
        ]);

        $postComment->update([
            'comments' => $request->input('comments'),
            'post_id' => $request->input('post_id'),
            'user_id' => $request->input('user_id'),
        ]);

        return redirect()->route('post_comments.index')->with('success', 'Comment updated successfully.');
    }

   
    public function destroy(PostComment $postComment)
    {
        $postComment->delete();
        return redirect()->route('post_comments.index')->with('success', 'Comment deleted successfully.');
    }
}
