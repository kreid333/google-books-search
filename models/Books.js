const mongoose = require("mongoose");
const { Schema } = mongoose;

const booksSchema = new Schema({
  title: String,
  authors: String,
  description: String,
  image: [{ body: String, date: Date }],
  link: { type: Date, default: Date.now },
});

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;
