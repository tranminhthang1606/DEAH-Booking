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
        Schema::create('tours', function (Blueprint $table) {
            $table->id();
            $table->integer('type_id');
            $table->string('title');
            $table->integer('day');
            $table->text('description');
            $table->string('map');
            $table->string('price');
            $table->string('promotion');
            $table->boolean('private');
            $table->integer('views');
            $table->integer('province_id');
            $table->integer('district_id');
            $table->integer('ward_id');
            $table->integer('is_active');
            $table->timestamps();
            $table->foreign('province_id')->references('id')->on('provinces');
            $table->foreign('district_id')->references('id')->on('districts');
            $table->foreign('ward_id')->references('id')->on('wards');


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tours');
    }
};
