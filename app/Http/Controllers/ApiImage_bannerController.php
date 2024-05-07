<?php

namespace App\Http\Controllers;

use App\Models\Images_banner;
use Illuminate\Http\Request;

class ApiImage_bannerController extends Controller
{
    //
    public function index()
    {
        //
        $data = Images_banner::all();
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
        $data =  $request->except('image');
        if($request->hasFile('image')){
            $image =  $request->file('image');
            $imageName = $image->getClientOriginalName();
            $imagePath =  $image->storeAs('public/Images_banner',$imageName);
            $data['image'] = 'Images_banner/'.$imageName;
        }
        Images_banner::query()->create($data);
        return response()->json([],204);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $Images_banner =  Images_banner::find($id);
        return response()->json($Images_banner);

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
        $Images_banner = Images_banner::findOrFail($id);
        $data =  $request->except('image');
        if($request->hasFile('image')){
            $image =  $request->file('image');
            $imageName = $image->getClientOriginalName();
            $imagePath =  $image->storeAs('public/Images_banner',$imageName);
            $data['image'] = 'Images_banner/'.$imageName;
        }
        $Images_banner->update($data);
        return response()->json($data);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $data =  Images_banner::find($id);
        if($data){
            $imagePath =  public_path('storage/'.$data->image);
            if(file_exists($imagePath)){
                unlink($imagePath);
            }
            $data->delete();
        }
        return response()->json($data);
    }
}
