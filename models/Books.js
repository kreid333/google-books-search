const mongoose = require("mongoose");
const { Schema } = mongoose;

const booksSchema = new Schema({
  title: String,
  authors: [
    {
      type: String,
    },
  ],
  description: String,
  image: String,
  link: String,
});

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;
