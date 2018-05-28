<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfessionalModulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('professional_modules', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('mp');  // 1 = MP1, 2 = MP2...
            $table->string('name', 150);
            $table->mediumText('section1')->nullable();  // Estratègies metodològiques.
            $table->mediumText('section2')->nullable();  // Criteris d'avaluació.
            $table->mediumText('section3')->nullable();  // Recursos.
            $table->mediumText('section4')->nullable();  // Dual.
            $table->boolean('approved')->default(false); // Acceptada pel cap de departament?
            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->timestamps();
            // Un Mòdul Professional pertany a un Departament.
            $table->unsignedInteger('department_id');
            $table->foreign('department_id')->references('id')->on('departments')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('professional_modules');
    }
}
