<?php

namespace App\Http\Controllers;

use App\Models\Post_comment;
use Illuminate\Http\Request;

class ApiPost_commentController extends Controller
{
    //
    public function index()
    {
        //
        $data =Post_comment::all();
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     */
 

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $data =  $request->except('');
        Post_comment::query()->create($data);
        return response()->json([],204);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $post_comment = Post_comment::find($id);
        return response()->json($post_comment);

    }

    /**
     * Show the form for editing the specified resource.
     */

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $post_comment =Post_comment::findOrFail($id);
        $data =  $request->all();
        $post_comment->update($data);
        return response()->json($data);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $data = Post_comment::find($id);
        $data->delete();
        return response()->json($data);
    }
    
}
