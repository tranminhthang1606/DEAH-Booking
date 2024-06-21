<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Hotel extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'hotels';
    protected $fillable = [
           'name',
           'room',
           'price',
           'promotion',
           'description',
           'services',
           'status',
           'province_id',
           'district_id',
           'ward_id',
           'address',
           'status',

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
