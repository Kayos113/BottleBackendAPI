require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/BottleDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(connect => console.log("Connected to mongodb.."))
.catch(err => console.log("Could not connect to mongodb\n",err)); // Connect to Mongo Database

const messageSchema = {
  message: String
};
const Message = mongoose.model("Message", messageSchema);

exports.Message = Message;
exports.messageSchema = messageSchema;
