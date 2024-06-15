<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TourAttribute extends Model
{
    use HasFactory;
    protected $table = 'tour_attribute';
    protected $fillable = ['attribute_id','tour_id'];


    public function tour(){
        return $this->belongsTo(Tour::class,'tour_id','id');
    }

    public function attribute(){
        return $this->belongsTo(Attribute::class,'attribute_id','id');
    }

}
