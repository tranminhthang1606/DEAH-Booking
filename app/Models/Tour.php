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
    'rate',
    'province_id',
    'district_id',
    'ward_id'

  ];

  public function images()
  {
    return $this->hasMany(Tour_image::class);
  }
  public function rates()
  {
    return $this->hasMany(Rate::class);
  }
  public function itineraries()
  {
    return $this->hasMany(Itinerarie::class);
  }
}
