<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tour extends Model
{
  use HasFactory;
  use SoftDeletes;
  protected $table = 'tours';
  protected $fillable = [
    'id',
    'type_id',
    'title',
    'day',
    'description',
    'map',
    'price',
    'promotion',
    'private',
    'views',
    'rate',
    'province_id',
    'district_id',
    'ward_id'

  ];
  public function attributes(){
    return $this->belongsToMany(Attribute::class,'tour_attribute');
}
  public function images()
  {
    return $this->hasMany(TourImage::class);
  }
  public function types()
  {
    return $this->belongsTo(TourType::class,'type_id');
  }
  public function rates()
  {
    return $this->hasMany(Rate::class);
  }
  public function itineraries()
  {
    return $this->hasMany(Itinerary::class);
  }
  public function province()
  {
    return $this->belongsTo(Province::class,'province_id');
  }
  public function district()
  {
    return $this->belongsTo(District::class,'district_id');
  }
  public function ward()
  {
    return $this->belongsTo(Ward::class,'ward_id');
  }

}
