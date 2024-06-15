<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post_comment extends Model
{
    use HasFactory;
    protected $table = 'comment_post';
    protected $fillable = ['comment','post_id','user_id'];
    public function post(){
        return $this->belongsTo(Post::class);
      }}
