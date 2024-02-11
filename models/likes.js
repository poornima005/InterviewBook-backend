const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.set('strictQuery', true);

const likesSchema = new mongoose.Schema({
  userID: { 
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  answerID: 
  { 
      type: Schema.Types.ObjectId,
      ref: 'answer'
  }
}, { timestamps: true });

module.exports = mongoose.model("Likes", likesSchema);
