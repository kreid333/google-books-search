import React from "react";

const SearchBar = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Book Search</h5>
        <p className="card-text">Book</p>
        <input type="text" className="form-control" placeholder="Book Name"/>
        <button className="btn btn-success float-right mt-3">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
