import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("/api/config").then((response) => {
      console.log(response.data);
    })
  })
  return (
    <h1>Hello World</h1>
  );
}

export default App;
