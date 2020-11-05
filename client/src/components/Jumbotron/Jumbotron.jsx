import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid mt-4 main-image">
      <div className="container">
        <h1 className="display-4 main-text text-center">Google Books Search</h1>
        <p className="lead main-text text-center">
          Search for and save books of interest
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
