<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTemariesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('temaries', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('nf');       // 1 = NF1, 2 = NF2...
            $table->unsignedInteger('duration'); // n hores
            $table->string('name', 150);
            $table->text('description')->nullable();
            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->timestamps();
            // Un Nucli Formatiu pertany a una Unitat Formativa.
            $table->unsignedInteger('training_unit_id');
            $table->foreign('training_unit_id')->references('id')->on('training_units')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('temaries');
    }
}
