const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
  },
  cart: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
});

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);

module.exports = User;
