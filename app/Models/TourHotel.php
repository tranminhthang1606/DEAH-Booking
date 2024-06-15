<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TourHotel extends Model
{
    use HasFactory;
    protected $table = 'tour_hotel';
    protected $fillable = [
        'tour_id',
        'hotel_id',
    ];

    public function tour(){
        return $this->belongsTo(Tour::class,'tour_id','id');
    }

    public function hotel(){
        return $this->belongsTo(Hotel::class,'hotel_id','id');
    }
}
