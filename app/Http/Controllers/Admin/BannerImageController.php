<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\BannerImages;
use Illuminate\Http\Request;

class BannerImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $images = BannerImages::all();
        return view('admin.banner_images.index', compact('images'));
    }
   
    public function show(BannerImages $bannerImage)
    {
        return view('admin.banner_images.show', compact('bannerImage'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BannerImages  $bannerImages
     * @return \Illuminate\Http\Response
     */
    public function edit(BannerImages $bannerImage)
    {
        return view('admin.banners.edit', compact('bannerImage'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\BannerImages  $bannerImages
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BannerImages $bannerImage)
    {
        // Validate incoming request if necessary
        $updated = $bannerImage->update([
            'banner_id' => $request->banner_id,
            'image' => $request->file('image')->store('images', 'public'),
        ]);

        if ($updated) {
            return redirect()->route('admin.banners.index')->with('success', 'Image updated successfully.');
        }
        return redirect()->back()->with('error', 'Failed to update image.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BannerImages  $bannerImages
     * @return \Illuminate\Http\Response
     */
    public function destroy(BannerImages $bannerImage)
    {
        $deleted = $bannerImage->delete();

        if ($deleted) {
            return redirect()->route('admin.banners.index')->with('success', 'Image deleted successfully.');
        }
        return redirect()->back()->with('error', 'Failed to delete image.');
    }
}
