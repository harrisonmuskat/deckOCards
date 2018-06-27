# Deck of Cards App

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