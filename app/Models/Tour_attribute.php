<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tour_attribute extends Model
{
    use HasFactory;
    protected $table = 'tour_attribute';
    protected $fillable = ['attribute_id','tour_id'];
}
