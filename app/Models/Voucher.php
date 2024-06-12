<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use app/Models/User;
class Voucher extends Model
{
    use HasFactory;
    protected $table = 'vouchers';
    protected $fillable = [
      'voucher',  
      'title',
      'qty',
      'discount_type',  
      'max',
      'start',
      'end',
      'status',
      'value'
    ];
    public function users()
    {
        return $this->belongsToMany(User::class, 'user_voucher')->withPivot('using_voucher');
  }
}
