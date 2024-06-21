<?php

namespace App\Http\Controllers\client;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ResponseJson;
use App\Models\Province;
use App\Models\Rate;
use App\Models\Tour;
use App\Models\Tour_image;
use App\Models\TourType;
use Illuminate\Http\Request;
use Illuminate\Support\Number;

class TourController extends Controller
{
    public $response;
    public $query;
    public function __construct(ResponseJson $response)
    {
        $this->response = $response;
        $this->query = Tour::clone()->where('is_active', 1);

    }
    public function index(Request $request)
    {
        $type_id = $request->type_id;
        $province = $request->province;
        $rate = $request->rate;
        $sortByPrice = $request->sort;
        if (isset($rate) && $rate !== null) {
            $id = Rate::groupBy('tour_id')->havingRaw('AVG(rate)=' . $rate)->get('tour_id');
            $this->query->whereIn('id', $id);
        }
        if (isset($province) && $province !== null) {
            $this->query->where('province_id', $province);
        }
        if (isset($type_id) && $type_id !== null) {
            $this->query->where('type_id', $type_id);
        }
        ;
        if (isset($sortByPrice)) {
            if ($sortByPrice == 'desc') {
                $this->query->orderByDesc('price')->get();
            } else {
                $this->query->orderBy('price')->get();
            }
        } else {
            $this->query->orderByDesc('created_at');
        }
        $tours = $this->query->get();
        $provinces_id = Tour::groupBy('province_id')->get('province_id');
        $types_id = Tour::groupBy('type_id')->get('type_id');
        $provinces = Province::whereIn('id', $provinces_id)->get();
        $tour_type = TourType::whereIn('id', $types_id)->get();
        foreach ($tours as $tour) {
            $tour->type = $tour->type()->value('name_type');
            $tour->rates = [
                'rate' => number_format($tour->rates()->avg('rate'), 1),
                'qty' => $tour->rates()->count('rate')
            ];
            $tour->images = $tour->images()->get('image');
            $tour->location = [
                'province' => $tour->province()->value('name'),
                'district' => $tour->district()->value('name'),
                'ward' => $tour->ward()->value('name')
            ];
        }


        if ($tours) {
            return $this->response->responseSuccess(['tours' => $tours, 'provinces' => $provinces, 'types' => $tour_type]);
        }
        return $this->response->responseFailed();
    }
    public function show(Request $request)
    {
        $this->query = Tour::find($request->id);

        $rate = $this->query->rates();
        $tour = Tour::find($request->id);
        //Kiểu du lịch của tour
        $tour->type = $tour->type()->value('name_type');
        //Lịch trình tour
        $tour->itineraries = $tour->itineraries()->orderBy('day')->get(['day', 'title', 'itinerary']);
        //Ảnh của tour
        $tour->images = $tour->images()->get('image');
        //Địa điểm tour
        $tour->location = [
            'province' => $this->query->province()->value('name'),
            'district' => $this->query->district()->value('name'),
            'ward' => $this->query->ward()->value('name')
        ];
        //Đánh giá của tour
        $tour->rate = [
            'rate' => number_format($tour->rates()->avg('rate'), 1),
            'qty' => $rate->count('rate')
        ];
        //Đánh giá của tour
        $tour->comments = $tour->comments()->orderByDesc('created_at')->get('comment');
        //Các tour cùng kiểu du lịch
        $tour_same_type = Tour::where('is_active', 1)
            ->where('type_id', $this->query->type->id)->whereNot('id', $request->id)
            ->take(8)->get();
        $data = [
            'tour' => $tour,
            // 'tour_type' => $tour_type
        ];
        if ($data) {
            $this->query->update(['views' => $tour->views += 1]);
            return $this->response->responseSuccess($data);
        }
        return $this->response->responseFailed();
    }
}
