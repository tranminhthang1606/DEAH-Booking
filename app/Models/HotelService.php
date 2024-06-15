<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HotelService extends Model
{
    use HasFactory;
    protected $table = 'hotel_service';
    protected $fillable = [
        'hotel_id',
        'service_id'
    ];


    public function hotel(){
        return $this->belongsTo(Hotel::class,'hotel_id','id');
    }

    public function service(){
        return $this->belongsTo(Service::class,'service_id','id');
    }

}