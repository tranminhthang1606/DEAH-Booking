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
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('tour_id');
            $table->integer('hotel_id');
            $table->string('price');
            $table->string('promotion');
            $table->integer('people');
            $table->date('start');
            $table->date('end');
            $table->boolean('status');
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('tour_id')->references('id')->on('tours');
            $table->foreign('hotel_id')->references('id')->on('hotels');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
