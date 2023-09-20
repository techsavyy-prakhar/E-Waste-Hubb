
const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
    Name: {
      type: String,
      trim: true,
      required: true,
    },
    Image: {
      type: String,
      required: true,
    },
    Category: {
      type: String,
      required: true,
      
    },
    
    Metals:[
      {
        type:String,
        trim:true
      }
    ],
    Percentage:{
      type:Number,
      required:true
    }
  });
  
  const product = mongoose.model("product", ProductsSchema);
  module.exports = product;
  
