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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('nome', 45);
            $table->string('sobrenome', 45);
            $table->string('conjuge_nome', 45);
            $table->string('conjuge_sobrenome', 45);
            $table->string('email')->unique();
            $table->string('password');
            $table->date('data_cerimonia');
            $table->time('hora_cerimonia');
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};
