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
}
