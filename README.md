# `Message in a Bottle`

This api is built to be used with a game where you need multiple deck of unique and custom cards, and also need to be able to draw a random card from any of the decks.

This api uses a local mongoose database at the moment, running on port 27017, but can be customized to use your own remote mongoose database.

### RESTful routes:

"/messages"
GET: retrieves all message objects at once, returns in a JSON object with an array of all messages.
DELETE: clears out all message objects. CANNOT BE UNDONE, YOU WILL LOSE ALL MESSAGES

"/messages/random"
GET: retrieves a random message and returns it as a JSON object.

"messages/:id"
GET: retrieves the message that is specified in the route
DELETE: deletes the message within the database identified in the route. CANNOT BE UNDONE
