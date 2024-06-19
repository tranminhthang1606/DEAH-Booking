<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ward extends Model
{
    use HasFactory;
    protected $table = 'wards';
    public $timestamps = false;
    protected $fillable = ['name', 'district_id'];
    public function district()
    {
        return $this->belongsTo(District::class);

    }
    public function tour()
    {
        return $this->hasMany(Tour::class);

    }
}
