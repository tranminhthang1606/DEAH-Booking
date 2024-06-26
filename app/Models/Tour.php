<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tour extends Model
{
  use HasFactory;
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
    'province_id',
    'district_id',
    'ward_id',
    'is_active'

  ];

  public function images()
  {
    return $this->hasMany(TourImage::class);
  }
  public function types()
  {
    return $this->belongsTo(TourType::class, 'type_id');
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
    return $this->hasMany(Province::class);
  }
  public function district()
  {
    return $this->hasMany(District::class);
  }
  public function ward()
  {
    return $this->hasMany(Ward::class);
  }
}
