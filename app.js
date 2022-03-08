const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./controllers/messageController.js");

app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// HOME route
app.route("/")
.get((req, res) => {
  res.send("WELCOME HOME!");
});


//  Get ALL messages
app.route("/messages/all")
.get((req, res) => db.getAllMessages(req, res))
.post((req,res) => db.writeMessage(req, res));

//  Get a RANDOM message
app.get("/messages/rand", (req, res) => db.getRandomMessage(res, res));

//  Get a SPECIFIC message
app.get("/messages/:id", (req, res) => db.getMessageById(req, res));

// delete routes
app.route("/delete/:id")
.delete((req, res) => db.deleteMessageById(req, res));


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
