<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Hotel;
use App\Models\HotelImage;
use Illuminate\Http\Request;

class Hotel_ImageController extends Controller
{
    //
    public function index()
    {
        $hotelImages = HotelImage::all();
        return view('admin.Hotel_images.index', compact('hotelImages'));
    }


    public function create()
    {
        $hotels = Hotel::all();
        return view('admin.Hotel_images.add', compact('hotels'));
    }

    public function show($id){
        $hotelImages = HotelImage::where('hotel_id',$id)->get();
        return view('admin.Hotel_images.show', compact('hotelImages'));
    }

  
    public function store(Request $request)
    {
        $request->validate([
            'hotel_id' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $hotelImage = new HotelImage();
        $hotelImage->hotel_id = $request->hotel_id;

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images'), $imageName);
            $hotelImage->image = $imageName;
        }

        $hotelImage->save();

        return redirect()->route('hotel_images.show',$request->hotel_id)
                        ->with('success','Hotel Image created successfully.');
    }

 



    public function edit(HotelImage $hotelImage)
    {
        $hotels = Hotel::all();
        return view('admin.Hotel_images.edit',compact('hotelImage','hotels'));
    }


    public function update(Request $request, HotelImage $hotelImage)
    {
        $request->validate([
            'hotel_id' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $hotelImage->hotel_id = $request->hotel_id;

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images'), $imageName);
            $hotelImage->image = $imageName;
        }

        $hotelImage->save();

        return redirect()->route('hotel_images.show',$request->hotel_id)
                        ->with('success','Hotel Image updated successfully');
    }

 
    public function destroy($id)
    {
        $data =  HotelImage::find($id);
        if($data){
            $imagePath =  public_path('storage/'.$data->image);
            if(file_exists($imagePath)){
                unlink($imagePath);
            }
            $data->delete();
        }
        return back()->with('success','Hotel image is deleted.');;
    }
}
