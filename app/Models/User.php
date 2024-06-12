<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;
    protected $table  ='users';
    protected $fillable = [
      'name',
      'email',
      'password',
      'date_of_birth',
      'phone',
      'address',
      'role'


    ];
    public function vouchers()
    {
        return $this->belongsToMany(Voucher::class, 'user_voucher')->withPivot('using_voucher');
    }
}
