<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;
    protected $table = 'hotels';
    protected $fillable = [
           'name',
           'room',
           'price',
           'promotion',
           'description',
           'services',
           'status',
           'owner_id',
           'province_id',
           'district_id',
           'ward_id',
           'address',
           'rate',

    ];
    public function hotel_comments(){
        return $this->hasMany(Hotel_comment::class,'hotel_comments')->with('hotel_id');
    }
    public function hotel_images(){
        return $this->hasMany(Hotel_image::class,'hotel_images')->with('hotel_id');
    }
    public function hotel_service(){
        return $this->hasMany(Hotel_service::class,'hotel_service')->with('hotel_id');
    }
    public function province(){
        return $this->hasMany(Provinces::class,'provinces')->with('id');
    }
    public function tour_hotel(){
        return $this->hasMany(Provinces::class,'tour_hotel')->with('hotel_id');
    }
}
