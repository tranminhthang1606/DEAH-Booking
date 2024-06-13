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
        Schema::create('tour_attribute', function (Blueprint $table) {
            $table->id();
            $table->integer('attribute_id');
            $table->integer('tour_id');
            $table->timestamps();
             $table->foreign('attribute_id')->references('id')->on('attributes');
             $table->foreign('tour_id')->references('id')->on('tours');



        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tour_attribute');
    }
};
