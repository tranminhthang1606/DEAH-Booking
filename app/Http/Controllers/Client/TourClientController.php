<?php

namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ResponseJson;
use App\Models\Tour;
use App\Models\Tour_image;
use Illuminate\Http\Request;
use Illuminate\Support\Number;

class TourClientController extends Controller
{
    public $response;
    public function __construct(ResponseJson $response)
    {
        $this->response = $response;
    }
    public function index(Request $request)
    {
        $query = Tour::clone();
        $tour_type = $request->type_id;
        $province = $request->province;
        $rate = $request->rate;
        $sortByPrice = $request->sort;
        if (isset($rate) && $rate !== null) {
            $query->where('rate', $rate);
        }
        if (isset($province) && $province !== null) {
            $query->where('province_id', $province);
        }
        if (isset($tour_type) && $tour_type !== null) {
            $query->where('type_id', $tour_type);
        }
        ;
        if (isset($sortByPrice)) {
            if ($sortByPrice == 'desc') {
                $query->orderByDesc('price')->get();
            } else {
                $query->orderBy('price')->get();
            }
        }
        $tours = $query->orderByDesc('id')->with(['images', 'rates'])->get();


        if ($tours) {
            return $this->response->responseSuccess($tours);
        }
        return $this->response->responseFailed();

    }
    public function show(Request $request)
    {
        $query = Tour::find($request->id);
        $itineraries = $query->itineraries()->orderBy('day')->get();
        $rate = $query->rates();
        $tour = Tour::with('images')->find($request->id);
        $tour_type = Tour::where('is_active',1)->where('type_id',$query->type_id)->where('id','!=',$request->id)->get();
        $data = [
            'tour' => $tour,
            'itineraries' => $itineraries,
            'rates' => [
                'rate' => Number::format($rate->avg('rate'), maxPrecision: 1),
                'qty' => $rate->count('rate')
            ],
            'tour_type'=>$tour_type
        ];
        if ($data) {
            $query->update(['views' => $tour->views += 1]);
            return $this->response->responseSuccess($data);
        }
        return $this->response->responseFailed();
    }

}
