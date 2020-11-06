import { useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Search from "./pages/Search";
import "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Saved from "./pages/Saved";

function App() {
  useEffect(() => {
    axios.get("/api/config").then((response) => {
      console.log(response.data);
    });
  });
  return (
    <Router>
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
              <Switch>
                <Route exact path="/search" component={Search} />
                <Route exact path="/saved" component={Saved} />
                <Route path="/" component={Search} />
              </Switch>
            </div>
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
