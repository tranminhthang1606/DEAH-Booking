<?php

namespace App\Models;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Authenticatable as AuthenticableTrait;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Model implements Authenticatable
{
  use AuthenticableTrait;
  use HasFactory;
  use SoftDeletes;
  protected $table = 'users';
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
    return $this->belongsToMany(Voucher::class, 'user_voucher');
  }
}
