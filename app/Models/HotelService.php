<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class HotelService extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'hotel_service';
    protected $fillable = [
        'hotel_id',
        'service_id'
    ];
}
