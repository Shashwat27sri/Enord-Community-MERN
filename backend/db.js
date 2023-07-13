const mongoose = require('mongoose')

const url = "mongodb+srv://Shashwat27_sri:Shashwat27sri@enord.nnqohuy.mongodb.net/EnordCommunity?retryWrites=true&w=majority"

module.exports.connect= () => {
  mongoose
  .connect(url)
  .then((res) => console.log("MongoDB is connected successfully"))
  .catch((err) => console.log('Error: ',err))
};