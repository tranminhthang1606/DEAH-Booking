<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel_service extends Model
{
    use HasFactory;
    protected $table = 'hotel_service';
    protected $fillable = [
        'hotel_id',
        'service_id'
    ];
}
