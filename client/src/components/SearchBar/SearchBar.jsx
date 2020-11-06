import React, { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}?maxResults=10&key=AIzaSyCtonvpysLv0nZos107pXQAbH2sm8m_PIo`
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        if (err) throw err;
      });
  };

  return (
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
  );
};

export default SearchBar;
