<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ResponseJson;
use App\Models\Post;
use App\Models\Province;
use App\Models\Tour;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    //
    public $response;
    public function __construct(ResponseJson $response) {
        $this->response = $response;
    }
    public function newTours(){
        $tours = Tour::with('images')->get();
        if($tours){
            return $this->response->responseSuccess($tours);
        }
        return $this->response->responseFailed();
    }
    public function featureTours(){
        $tours = Tour::orderByDesc('views')->take(5)->get();
        if($tours){
            return $this->response->responseSuccess($tours);
        }
        return $this->response->responseFailed();
    }
    public function newPosts(){
        $posts = Post::orderByDesc('id')->take(5)->get();
        if($posts){
            return $this->response->responseSuccess($posts);
        }
        return $this->response->responseFailed();
    }

    public function getDestination(){
        $tours = Province::all()->random(4);
        if($tours){
            return $this->response->responseSuccess($tours);
        }
        return $this->response->responseFailed();
    }
}
