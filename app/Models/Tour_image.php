<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tour_image extends Model
{
    use HasFactory;
    protected $table = 'tour_images';
    protected $fillable = [
        'tour_id',
        'image'
    ];
}
