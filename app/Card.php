<?php

# app/Card.php

namespace App;

use Illuminate\Database\Eloquent\Model;

final class Card extends Model  
{
	function getRandomCard($suit)
	{
		$cards = $this->db->query("SELECT * FROM cards WHERE suit = {$suit} OR suit IS NULL");
		$randomCard = array_rand($cards, 1);
		return $randomCard;
	}
}