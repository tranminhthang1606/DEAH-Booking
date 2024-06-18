<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class HotelComment extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected  $table = 'hotel_comments';
    protected $fillable = [
        'comments', 
        'hotel_id',
        'user_id'
    ];
}
