<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('convidado', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('email');
            $table->foreignId('users_id')->constrained('users')->onUpdate('cascade')->onDelete('cascade');
            $table->string('auth_key');
            $table->boolean('confirmou_presenca')->default(false);
            $table->integer('total_pessoas');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('convidados');
    }
};
