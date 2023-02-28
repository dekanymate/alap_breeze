<?php

use App\Models\Ingatlanok;
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
        Schema::create('ingatlanoks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('kategoria')->references('id')->on('kategoriaks');
            $table->longText('leiras');
            $table->date('hirdetesDatuma');
            $table->boolean('tehermentes');
            $table->integer('ar');
            $table->string('kepURL')->nullable();
            $table->timestamps();
            
        });

        Ingatlanok::create(['kategoria'=>1,'leiras'=>"Leírás", 'hirdetesDatuma'=>"2022-01-01", 'tehermentes'=>1, 'ar'=>"100" ]);

       
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ingatlanoks');
    }
};
