<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel_image extends Model
{
    use HasFactory;
    protected $table = 'hotel_images';
    protected $fillable = [
        'hotel_id',
        'image'
    ];
    
    public function hotel(){
        return $this->hasMany(Hotel::class,'hotel_images')->with('hotel_id');
    }
}
