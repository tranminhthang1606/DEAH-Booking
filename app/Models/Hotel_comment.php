<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel_comment extends Model
{
    use HasFactory;
    protected  $table = 'hotel_comments';
    protected $fillable = [
        'comments',
        'hotel_id',
        'user_id'
    ];
}
