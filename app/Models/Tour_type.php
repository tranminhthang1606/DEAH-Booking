<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tour_type extends Model
{
    use HasFactory;
    protected $table = 'tour_type';
    protected $fillable =[
          'name_type'
    ];
}
