<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rate extends Model
{
    use HasFactory;
    protected $table = 'rates';
    protected $fillable = [
        'tour_id',
        'user_id',
        'rate'
    ];
    public function tour(){
        return $this->belongsTo(Tour::class,'tour_id','id');
    }

    public function user(){
        return $this->belongsTo(User::class,'user_id','id');
    }
}
