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
        Schema::create('tour_hotel', function (Blueprint $table) {
            $table->id();
            $table->integer('tour_id');
            $table->integer('hotel_id');
            $table->timestamps();
            $table->foreign('tour_id')->references('id')->on('tours');
            $table->foreign('hotel_id')->references('id')->on('hotels');


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tour_hotel');
    }
};
