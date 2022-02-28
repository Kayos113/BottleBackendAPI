const model = require("../models/messageModel");
let Message = model.Message;
let nElems = 0;

// Route "/messages"
exports.getAllMessages = function(req, res) {
  Message.find({}, (err, foundMessages) => {
      if(!err) {
        res.send(foundMessages);
      } else {
        res.send(err || "Something went wrong retrieving your messages.");
      }
  });
}

exports.writeMessage = function(req, res) {
  const newMessage = new Message({
    message: req.body.message
  });
  newMessage.save((err) => {
    if(!err) {
      console.log("Message submitted.");
      res.send("Message Submitted.");
      nElems++;
    } else {
      console.log(err || "Something went wrong submitting your message. Please try again later.");
      res.send(err);
    }
  });
}

// Route "/messages/rand"
exports.getRandomMessage = function(req, res) {
  getMessageCount();
  const index = Math.floor(Math.random()*nElems);
  Message.findOne().skip(index).exec( (err, foundMessage) => {
    res.send(foundMessage);
  });
}

// Route "/message/:id"
exports.getMessageById = function(req, res) {
  const id = req.params.id;
  Message.find({_id:id}, (err, foundMessage) => {
    if(!err) {
      res.send(foundMessage);
    } else {
      res.send(err);
    }
  })
}

exports.deleteMessageById = function(req, res) {
  Message.deleteOne({_id:req.params.id}).then( () => {
    res.send("Deleted Succesfully");
  }).catch("No records deleted with id: " + req.params.id);
}

function getMessageCount() {
  Message.countDocuments({}, (err, count) => {
    if(!err) {
      nElems = count;
    } else {
      console.log(err);
    }
  })
}
