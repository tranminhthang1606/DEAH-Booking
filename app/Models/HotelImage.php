<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HotelImage extends Model
{
    use HasFactory;
    protected $table = 'hotel_images';
    protected $fillable = [
        'hotel_id',
        'image'
    ];


    public function hotel()
    {
        return $this->belongsTo(Hotel::class, 'hotel_id', 'id');
    }

}
