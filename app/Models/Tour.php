<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tour extends Model
{
    use HasFactory;
    protected $table = 'tours';
    protected $fillable = [
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
}
