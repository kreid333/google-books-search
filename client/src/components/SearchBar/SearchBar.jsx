import React, { useState } from "react";
import axios from "axios";
import Results from "../Results/Results";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bookList, setBookList] = useState([]);
  const [resultsDisplay, setResultsDisplay] = useState("none");

  const handleSumbit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}?printType=books&key=AIzaSyCtonvpysLv0nZos107pXQAbH2sm8m_PIo`
      )
      .then((response) => {
        setResultsDisplay("block");
        console.log(response.data.items);
        setBookList(response.data.items);
      })
      .catch((err) => {
        if (err) throw err;
      });
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Book Search</h5>
          <p className="card-text">Book</p>
          <form onSubmit={handleSumbit}>
            <input
              type="text"
              className="form-control"
              placeholder="Book Name"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <button className="btn btn-success float-right mt-3">Search</button>
          </form>
        </div>
      </div>
      <br />
      <Results data={bookList} display={resultsDisplay} />
    </>
  );
};

export default SearchBar;
