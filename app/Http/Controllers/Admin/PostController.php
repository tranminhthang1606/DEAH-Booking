<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    //
    public function index()
    {
        $data = Post::all();
        return response()->json($data);
    }
    
    public function show(string $id)
    {
        $post = Post::findOrFail($id);
        return response()->json($post);
    }
    
    public function store(Request $request)
    {
        $data = $request->all();
        $post = Post::query()->create($data);
        return response()->json($post, 201);
    }
    
    public function update(Request $request, string $id)
    {
        $post = Post::findOrFail($id);
        $data = $request->all();
        $post->update($data);
        return response()->json($post);
    }
    
    public function destroy($id)
    {
        $item = Post::findOrFail($id);
        $item->delete();
        return response()->json(['message' => 'Post deleted']);
    }
}
