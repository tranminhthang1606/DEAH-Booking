<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;
    protected $table = 'bookings';
    protected $fillable = [
        'user_id',
        'tour_id',
        'hotel_id',
        'price',
        'promotion',
        'people',
        'start',
        'end',
        'status'
    ];
}
