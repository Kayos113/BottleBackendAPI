const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//  Get ALL messages
app.route("/messages/all")
.get((req, res) => {res.json({ message: "Argh Matey!" });})
.post((req,res) => {  });

//  Get a RANDOM message
app.get("/messages/rand", (req, res) => {  });

//  Get a SPECIFIC message
app.get("/messages/:id", (req, res) => {
  const id = req.params.id;
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
