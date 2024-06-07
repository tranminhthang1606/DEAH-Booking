<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Images_banner extends Model
{
    use HasFactory;
    protected $table = 'image_banner';
    protected $fillable = [
        'banner_id',
        'image'
    ];
}
