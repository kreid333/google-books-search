// import axios from "axios";
import axios from "axios";
import React from "react";
import noImage from "./2884221-200.png";
import "./Results.css";

const Results = ({ data, display }) => {
  const handleSave = (event) => {
    const booktoSave = data.filter((saveBook) => {
      return saveBook.etag === event.target.id;
    });
    const bookData = {
      title: booktoSave[0].volumeInfo.title,
      authors: booktoSave[0].volumeInfo.authors,
      description: booktoSave[0].volumeInfo.description,
      image: booktoSave[0].volumeInfo.imageLinks.thumbnail,
      link: booktoSave[0].volumeInfo.infoLink,
    };
    axios
      .post("/api/books", bookData)
      .then(() => {
        alert("Book successfully saved!");
        console.log("Successfully saved book!");
      })
      .catch((err) => {
        if (err) throw err;
      });
  };
  return (
    <div className="card" style={{ display: display }}>
      <div className="card-body">
        <h5 className="card-title">Results</h5>
        {data.map((book) => {
          return (
            <>
              <div className="card" key={book.id}>
                <div className="card-body">
                  <button
                    className="float-right btn btn-outline-success save"
                    id={book.etag}
                    onClick={handleSave}
                  >
                    SAVE
                  </button>
                  <a href={book.volumeInfo.infoLink} target="_blank">
                    <button className="float-right mr-2 btn btn-outline-success save">
                      VIEW
                    </button>
                  </a>
                  <h4>{book.volumeInfo.title}</h4>
                  <p>
                    Written by:{" "}
                    {book.volumeInfo.authors > 1
                      ? book.volumeInfo.authors.join(", ")
                      : book.volumeInfo.authors}
                  </p>
                  <div className="row">
                    <div className="col-sm-2">
                      <img
                        src={
                          book.volumeInfo.imageLinks
                            ? book.volumeInfo.imageLinks.thumbnail
                            : noImage
                        }
                        alt="Book"
                      />
                    </div>
                    <div className="col-sm-10">
                      <p className="float-left">
                        {book.volumeInfo.description}
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

export default Results;
