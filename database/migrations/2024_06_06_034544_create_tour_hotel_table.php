<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {

        Schema::create('tour_hotel', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tour_id')->constrained()->on('tours');
            $table->foreignId('hotel_id')->constrained()->on('hotels');
            $table->timestamps();


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
