<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hotel_comments', function (Blueprint $table) {
            $table->id();
            $table->string('comments');
            $table->integer('hotel_id');
            $table->integer('user_id');
            $table->timestamps();
            $table->foreign('hotel_id')->references('id')->on('hotels');
            $table->foreign('user_id')->references('id')->on('users');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hotel_comments');
    }
};
