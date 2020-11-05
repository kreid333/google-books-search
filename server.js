// DEFINING VARIABLES
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// ESTABLISHING MONGOOSE CONNECTION
mongoose.connect("mongodb://localhost/googleBooks", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

// LOGGING CONNECTION TO CONSOLE
const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("Connected!");
})

connection.on("error", (err) => {
    console.log(err);
})

// LISTENING ON PORT
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
})