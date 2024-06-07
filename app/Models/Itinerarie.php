<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Itinerarie extends Model
{
    use HasFactory;
    protected $table ='itineraries';
    protected $fillable = [
        'tour_id',
        'day',
        'title',
        'itinerary'

    ];
}
