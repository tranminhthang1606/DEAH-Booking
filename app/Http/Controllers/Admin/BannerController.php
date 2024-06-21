<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ResponseJson;
use App\Models\Banner;
use App\Models\BannerImages;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public $response;
    public $query;
    public function __construct(ResponseJson $response)
    {
        $this->response = $response;
        $this->query = Banner::clone();
    }
    public function index()
    {
        //
        $banners = $this->query->where('is_active', 1)->get();
        if ($banners) {
            return $this->response->responseSuccess($banners);
        }
        return $this->response->responseFailed();
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
        $banner = $this->query->create($request->all());
        if ($banner) {
            foreach ($request->images as $image) {
                BannerImages::create([
                    'banner_id' => $banner->id,
                    'image' => $image
                ]);
            }

            return $this->response->responseSuccess($banner);
        }
        return $this->response->responseFailed();



    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        //
        $banner = $this->query->with('images')->find($request->banner);
        if ($banner) {
            return $this->response->responseSuccess($banner);
        }
        return $this->response->responseFailed();

    }

    /**
     * Show the form for editing the specified resource.
     */

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        //
        if ($request->is_active && $request->banner) {
            $this->query->find($request->banner)->update(['is_active' => $request->is_active]);
        }
        if (!$request->images) {
            $banner = $this->query->find($request->banner)->update([
                'title' => $request->title
            ]);
            return $this->response->responseSuccess($request->all());
        } else {
            $banner = $this->query->find($request->banner)->update([
                'title' => $request->title
            ]);
            BannerImages::where('banner_id', $request->banner)->delete();
            foreach ($request->images as $image) {
                BannerImages::create([
                    'banner_id' => $request->id,
                    'image' => $image
                ]);
            }
            return $this->response->responseSuccess($request->all());
        }
        return $this->response->responseFailed();

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        //
        // dd($request->all());
        $banner = $this->query->find($request->banner);
        if ($banner) {
            BannerImages::where('banner_id', $request->banner)->delete();
            $banner->delete();
            return $this->response->responseSuccess();
        }
        return $this->response->responseFailed();

    }
}
