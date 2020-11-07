import axios from "axios";
import React, { useEffect, useState } from "react";
import noImage from "../Results/2884221-200.png";

const SavedCard = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    axios
      .get("/api/books")
      .then((response) => {
        setSavedBooks(response.data);
      })
      .catch((err) => {
        if (err) throw err;
      });
  });
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Saved</h5>
        {savedBooks.map((book) => {
          return (
            <>
              <div className="card" key={book.id}>
                <div className="card-body">
                  <a href={book.link} target="_blank">
                    <button className="float-right mr-2 btn btn-outline-success save">
                      VIEW
                    </button>
                  </a>
                  <h4>{book.title}</h4>
                  <p>Written by: {book.authors.join(", ")}</p>
                  <div className="row">
                    <div className="col-sm-2">
                      <img
                        src={book.image ? book.image : noImage}
                        alt="Book"
                      />
                    </div>
                    <div className="col-sm-10">
                      <p className="float-left">
                        {book.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SavedCard;
