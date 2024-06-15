<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TourType extends Model
{
    use HasFactory;
    protected $table = 'tour_types';

    protected $fillable =[
          'name_type'
    ];
    public function tour(){
        return $this->hasMany(Tour::class);

    }
}
