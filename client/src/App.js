import { useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Search from "./pages/Search";

function App() {
  useEffect(() => {
    axios.get("/api/config").then((response) => {
      console.log(response.data);
    });
  });
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Jumbotron />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Search />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
