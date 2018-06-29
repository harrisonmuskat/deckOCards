# Deck of Cards App

Currently deployed to [deckocards](https://deckocards.herokuapp.com/).

## Backend API

This project uses the Lumen framework, which is lighter weight than Laravel and probably even still more than necessary for the MVP. I wanted to use Lumen as a way to reintroduce myself to PHP and also have the opportunity to set up a connection with a DB as opposed to using simple JSON as the backend.

The API routes are behind /api/v1 and allow the user to:

- return all cards
- create a new card (for example, to add Tarot cards or cards for a different game, or more than one deck's worth)
- return a specific card
- update a specific card
- delete a card

## Frontend JS

The front end infrastructure is designed as a SPA using React. Tests are written in Jasmine/Enzyme.

## Setting up the development environment

You will need a Postgres installation. The app uses the default Postgres configuration, so if you are on MacOS and have [Homebrew](https://brew.sh/) set up, run:

`brew install postgres`

Once that is done, run:

`php artisan:migrate` to run the application's migration(s).

## Building the JS

Run `npm start` to build the JS. The resulting code is placed in the `/public` directory.

## Running the app

Run `php -S localhost:8000 -t public` to start the server. The app should be running at localhost:8000.