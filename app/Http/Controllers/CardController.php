<?php

namespace App\Http\Controllers;

use App\Card;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

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
		$this->validate($request, [
			'rank' => 'string|required',
			'suit' => 'string|in:clubs,hearts,diamonds,spades|nullable'
		]);

		$card = new Card;

		$card->rank = $request->rank;
		$card->suit = $request->suit;

		$card->save();

		return response()->json($card, 201);
	}

	public function findById($id)
	{
		$card = Card::find($id);

		return response()->json($card, 200);
	}

	public function findBySuit($suit)
	{
		$cards = Card::where('suit', $suit)->get()->toArray();
		$randomCard = array_rand($cards, 1);
		return response()->json($cards[$randomCard], 200);
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