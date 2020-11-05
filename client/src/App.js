import { useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";

function App() {
  useEffect(() => {
    axios.get("/api/config").then((response) => {
      console.log(response.data);
    })
  })
  return (
    <>
    <Navbar />
    </>
  );
}

export default App;
