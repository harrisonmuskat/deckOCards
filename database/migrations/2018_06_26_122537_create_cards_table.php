<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

use App\Card;

class CreateCardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cards', function (Blueprint $table) {
            $table->increments('id');
            $table->string('rank');
            $table->string('suit')->nullable();
            $table->timestamps();
        });

        $suits = array('hearts', 'diamonds', 'spades', 'clubs');
        $cards = array('2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace');
        
        foreach ($suits as $suit) {
            foreach ($cards as $rank) {
                $newCard = new Card();
                $newCard->suit = $suit;
                $newCard->rank = $rank;
                $newCard->save();
            }
        }
        for ($x = 0; $x < 2; $x++) {
            $joker = new Card();
            $joker->suit = null;
            $joker->rank = 'joker';
            $joker->save();
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cards');
    }
}
