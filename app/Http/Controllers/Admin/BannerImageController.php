<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use App\Models\BannerImages;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BannerImageController extends Controller
{

    public function index()
    {
        $bannerImages = BannerImages::all();
        return view('admin.BannerImage.index', compact('bannerImages'));
    }


    public function create()
    {
        $banners = Banner::all();
        return view('admin.BannerImage.add', compact('banners'));
    }


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'banner_id' => 'required|exists:banners,id',
            'image' => 'required|image|max:2048',
        ]);

        $bannerImage = new BannerImages();
        $bannerImage->banner_id = $validatedData['banner_id'];
        $bannerImage->image = $request->file('image')->store('banner-images', 'public');
        $bannerImage->save();

        return redirect()->route('bannerimage.index')
                         ->with('success', 'Ảnh banner đã được tạo thành công.');
    }


    public function show(BannerImages $bannerImage)
    {
        // return view('bannerimages.show', compact('bannerImage'));
    }

   
    public function edit(BannerImages $bannerImage)
    {
        $banners = Banner::all();
        return view('admin.BannerImage.edit', compact('bannerImage', 'banners'));
    }


    public function update(Request $request, BannerImages $bannerImage)
    {
        $validatedData = $request->validate([
            'banner_id' => 'required|exists:banners,id',
            'image' => 'nullable|image|max:2048',
        ]);

        $bannerImage->banner_id = $validatedData['banner_id'];

        if ($request->hasFile('image')) {
            Storage::delete('public/' . $bannerImage->image);
            $bannerImage->image = $request->file('image')->store('banner-images', 'public');
        }

        $bannerImage->save();

        return redirect()->route('bannerimage.index')
                         ->with('success', 'Ảnh banner đã được cập nhật thành công.');
    }


    public function destroy($id)
    {
        $data =  BannerImages::find($id);
        if($data){
            $imagePath =  public_path('storage/'.$data->image);
            if(file_exists($imagePath)){
                unlink($imagePath);
            }
            $data->delete();
        }
        return back();
    }
}
