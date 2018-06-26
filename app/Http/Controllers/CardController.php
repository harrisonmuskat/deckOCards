<?php

namespace App\Http\Controllers;

use App\Card;
use Illuminate\Http\Request;

class CardController extends Controller
{
	/**
	 * New controller instance
	 * @return void
	 */

	public function index()
	{
		$cards = Card::all();

		return response()->json($cards);
	}

	public function create(Request $request)
	{
		$card = new Card;

		$card->rank = $request->rank;
		$card->suit = $request->suit;

		$card->save();

		return response()->json($card);
	}

	public function findById($id)
	{
		$card = Card::find($id);

		return response()->json($card);
	}

	public function update(Request $request, $id)
	{
		$card = Card::find($id);

		$card->rank = $request->input('rank');
		$card->suit = $request->input('suit');

		$card->save();

		return response()->json($card);
	}

	public function destroy($id)
	{
		$card = Card::find($id);
		$card->delete();

		return response()->json("The card {$card} has been deleted");
	}
}