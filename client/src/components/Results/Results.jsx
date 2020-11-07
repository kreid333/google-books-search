import React from "react";
import noImage from "./2884221-200.png";

const Results = ({ data }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Results</h5>
        {data.map((book) => {
          return (
            <>
              <div className="card" key={book.id}>
                <div className="card-body">
                  <h4>{book.volumeInfo.title}</h4>
                  <p>Written by: {book.volumeInfo.authors.join(", ")}</p>
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
