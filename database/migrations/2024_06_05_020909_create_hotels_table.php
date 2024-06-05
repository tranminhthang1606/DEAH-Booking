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
        Schema::create('hotels', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('room');
            $table->string('price');
            $table->string('promotion');
            $table->string('name');
            $table->string('description');
            $table->string('services');
            $table->string('status');
            $table->integer('owner_id');
            $table->integer('province_id');
            $table->integer('district_id');
            $table->integer('ward_id');
            $table->string('address');
            $table->integer('rate');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hotels');
    }
};
