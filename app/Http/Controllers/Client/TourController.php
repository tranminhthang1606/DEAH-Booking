<?php

namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ResponseJson;
use App\Models\District;
use App\Models\Rate;
use App\Models\Tour;
use App\Models\Tour_image;
use App\Models\Ward;
use Illuminate\Http\Request;
use Illuminate\Support\Number;

class TourController extends Controller
{
    public $response;
    public function __construct(ResponseJson $response)
    {
        $this->response = $response;
    }
    public function index(Request $request)
    {
        $query = Tour::clone();
        $query->where('is_active', 1);
        $tour_type = $request->type_id;
        $province = $request->province;
        $rate = $request->rate;
        $sortByPrice = $request->sort;
        $sortByDay = date('d', strtotime($request->end_day)) - date('d', strtotime($request->start_day));
        if (isset($sortByDay) && $sortByDay > 0) {
            $query->where('day', $sortByDay);
        }

        if (isset($province) && $province !== null) {
            $query->where('province_id', $province);
        }
        if (isset($tour_type) && $tour_type !== null) {
            $query->where('type_id', $tour_type);
        }
        ;
        if (isset($rate) && $rate !== null) {
            $id = Rate::select('tour_id')
                ->groupBy('tour_id')
                ->havingRaw('AVG(rate) =' . $rate . '')
                ->pluck('tour_id');
            $query->whereIn('id', $id);
        }
        if (isset($sortByPrice)) {
            if ($sortByPrice == 'desc') {
                $query->orderByDesc('price')->get();
            } else {
                $query->orderBy('price')->get();
            }
        } else {
            $query->orderBy('id');
        }
        $tours = $query->with(['images', 'types', 'province', 'district', 'ward'])->get();
        foreach ($tours as $tour) {
            $rates = $tour->rates();
            $tour->rates = [
                'rateAvg' => number_format($rates->avg('rate'), 1),
                'qty' => $rates->count('rate')
            ];

        }

        if ($tours) {
            return $this->response->responseSuccess($tours);
        }
        return $this->response->responseFailed();

    }
    public function show(Request $request)
    {
        $query = Tour::find($request->id);
        $rate = $query->rates();
        $tour = Tour::with(['images', 'types', 'province', 'district', 'ward'])->find($request->id);
        $tour_type = Tour::where('is_active', 1)->where('type_id', $query->type_id)->where('id', '!=', $request->id)
            ->with(['images', 'types', 'province', 'district', 'ward'])
            ->get();
        foreach ($tour_type as $item) {
            $rates = $item->rates();
            $item->rates = [
                'rateAvg' => number_format($rates->avg('rate'), 1),
                'qty' => $rates->count('rate')
            ];
        }
        if ($rate->get()) {
            $tour->rates = [
                'rate' => number_format($rate->avg('rate'), 1),
                'qty' => $rate->count('rate')
            ];
        }

        $data = [
            'tour' => $tour,
            'tour_type' => $tour_type
        ];
        if ($data) {
            $query->update(['views' => $tour->views += 1]);
            return $this->response->responseSuccess($data);
        }
        return $this->response->responseFailed();
    }

}
