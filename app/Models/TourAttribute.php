<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TourAttribute extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'tour_attribute';
    protected $fillable = ['attribute_id','tour_id'];
}
