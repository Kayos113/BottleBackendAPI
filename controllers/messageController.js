const model = require("../models/deckModel");
let Message = model.Message;


// Route "/messages"
export.getAllMessages = function(req, res) {
  Message.find({}, (err, foundMessages) => {
      if(!err) {
        res.send(foundMessages);
      } else {
        res.send(err || "Something went wrong retrieving your messages.");
      }
  });
}

export.writeMessage = function(req, res) {
  const newMessage = new Message({
    message: req.params.message
  });
  newMessage.save((err) => {
    if(!err) {
      console.log("Message submitted.");
    } else {
      console.log(err || "Something went wrong submitting your msaage. Please try again later.");
    }
  });
}

// Route "/messages/rand"
export.getRandomMessage = function(req, res) {

}

// Route "/massage/:id"
export.getMessageById = function(id) {
  
}
