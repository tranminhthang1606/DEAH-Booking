<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User_voucher extends Model
{
    use HasFactory;
    protected $table = 'user_voucher';
    protected $fillable =[
        'voucher_id',
        'user_id',
        'using_voucher'
    ];
}
