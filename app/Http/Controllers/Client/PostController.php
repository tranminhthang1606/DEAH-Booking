<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ResponseJson;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    //
    public $response;
    public $query;
    public function __construct(ResponseJson $response)
    {
        $this->response = $response;
        $this->query = Post::where('status',1);

    }
    public function index(Request $request)
    {
        $posts = $this->query->orderByDesc('id')->get();
        $posts_feature = $this->query->orderBy('views','desc')->get();
        $data = [
            'posts' => $posts,
            'posts_feature' => $posts_feature
        ];
        if ($data) {
            return $this->response->responseSuccess($data);
        }
        return $this->response->responseFailed();

    }
    public function show(Request $request)
    {
        $post = $this->query->find($request->id);
        $comments = $this->query->find($request->id)->comments()->orderByDesc('id')->get();
        $data = [
            'post' => $post,
            'comments' => $comments
        ];
        if ($data) {
            $this->query->update(['views' => $post->views += 1]);
            return $this->response->responseSuccess($data);
        }
        return $this->response->responseFailed();
    }
}
