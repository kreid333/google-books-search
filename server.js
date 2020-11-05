// DEFINING VARIABLES
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(express.static("client/build"));

// ESTABLISHING MONGOOSE CONNECTION
mongoose.connect("mongodb://localhost/googleBooks", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// LOGGING CONNECTION TO CONSOLE
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected!");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

// LISTENING ON PORT
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

// PRODUCTION
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
