const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  artURL: String,
  date: { type: Date, default: Date.now }
});

const article = mongoose.model("article", articleSchema);

module.exports = article;
