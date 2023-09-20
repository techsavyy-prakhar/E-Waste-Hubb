const mongoose = require("mongoose");


const CategoriesSchema = new mongoose.Schema({
    Name: {
      type: String,
      trim: true,
      required: true,
    },
    Description:{
        type: String,
        trim:true,
        required: true,
    },
    Image: {
      type: String,
      required: true,
    }


    
  });
  
  const category = mongoose.model("categories", CategoriesSchema);
  module.exports = category;


