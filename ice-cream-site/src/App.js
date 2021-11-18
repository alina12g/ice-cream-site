import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cards />
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
