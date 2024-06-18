<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Booking extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'bookings';
    protected $fillable = [
         'user_name',
         'email',
         'tour_name',
         'tour_price',
         'address_tour',
         'hotel_name',
         'hotel_price',
         'hotel_address',
         'book_price',
         'promotion_price',
         'total_price',
         'people',
         'start',
         'end',
         'status'

    ];
}
