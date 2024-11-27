const mongoose = require('mongoose');


  async function connectDB() {
    try {
     await mongoose.connect('mongodb://127.0.0.1:27017/E-Comm-Store', { useNewUrlParser: true, useUnifiedTopology: true });
     console.log("Connected to MongoDB");
    } catch (error) {
      console.log("Error while connecting to Mongo")
    }
 
 }
 
 module.exports = connectDB