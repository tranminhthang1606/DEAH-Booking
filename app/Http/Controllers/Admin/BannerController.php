<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use App\Models\BannerImages;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class BannerController extends Controller
{
    public function index()
    {
        $banners = Banner::with('images')->get();
        return view('admin.banners.index', compact('banners'));
    }

    public function create()
    {
        return view('admin.banners.create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'is_active' => 'required|boolean', // or 'required|in:0,1'
            'images.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // Validation for images
        ]);

        $banner = Banner::create($validatedData);

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('images', 'public');
                BannerImages::create(['banner_id' => $banner->id, 'image' => $path]);
            }
        }

        return redirect()->route('admin.banners.index')->with('success', 'Banner created successfully.');
    }

    public function show($id)
    {
        $banner = Banner::with('images')->findOrFail($id);
        return view('admin.banners.show', compact('banner'));
    }

    public function edit($id)
    {
        $banner = Banner::findOrFail($id);
        return view('admin.banners.edit', compact('banner'));
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'is_active' => 'required|boolean',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // Validation for images
        ]);
        
        $banner = Banner::findOrFail($id);
        $banner->is_active = substr($request->input('is_active'), 0, 1); // Đảm bảo chỉ lấy một ký tự
        $banner->update($validatedData);

        // Delete existing images
        BannerImages::where('banner_id', $banner->id)->delete();

        // Upload new images
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('images', 'public');
                BannerImages::create(['banner_id' => $banner->id, 'image' => $path]);
            }
        }

        return redirect()->route('admin.banners.index')->with('success', 'Banner updated successfully.');
    }

    public function destroy($id)
    {
        $banner = Banner::findOrFail($id);

        // Delete associated images
        BannerImages::where('banner_id', $banner->id)->delete();

        // Delete banner
        $banner->delete();

        return redirect()->route('admin.banners.index')->with('success', 'Banner deleted successfully.');
    }
}
