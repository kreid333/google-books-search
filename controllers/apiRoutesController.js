const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/api/books", (req, res) => {
  db.Books.find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

router.post("/api/books", (req, res) => {
  db.Books.create(req.body)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

module.exports = router;
