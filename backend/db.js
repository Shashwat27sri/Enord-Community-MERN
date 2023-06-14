const mongoose = require('mongoose')

const url = "mongodb+srv://Shashwat_Srivastava27:Shashwat27sri@cluster0.fca966b.mongodb.net/Enord?retryWrites=true&w=majority"

module.exports.connect= () => {
  mongoose
  .connect(url)
  .then((res) => console.log("MongoDB is connected successfully"))
  .catch((err) => console.log('Error: ',err))
};