<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BannerImages extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'banner_images';
    protected $fillable = [
        'banner_id',
        'image'
    ];
    public function banner(){
        return $this->belongsTo(Banner::class,'banner_id', 'id');
    }
}
