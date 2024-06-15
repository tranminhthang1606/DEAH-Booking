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
        'is_active'
    ];

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
