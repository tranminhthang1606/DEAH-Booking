<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tour_comment extends Model
{
    use HasFactory;
    protected $table = 'tour_comments';
    protected $fillable = [
        'comments',
        'tour_id',
        'user_id'
    ];
}
