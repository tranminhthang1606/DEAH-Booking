<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserVoucher extends Model
{
    use HasFactory;
    protected $table = 'user_voucher';
    protected $fillable = [
        'voucher_id',
        'user_id',
        'using_voucher'
    ];

    public function users()
    {
        return $this->belongsTo(User::class,'user_id');
    }

    public function vouchers()
    {
        return $this->belongsTo(Voucher::class,'voucher_id');
    }
}
