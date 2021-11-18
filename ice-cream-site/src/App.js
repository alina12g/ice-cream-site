<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
=======
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';

>>>>>>> 9ebd93b531fe75d3d40e0e942b7ed965b894e238

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <p> Ice Cream App! </p>
      </header>
=======
      <Navbar/>
      <Cards/>
>>>>>>> 9ebd93b531fe75d3d40e0e942b7ed965b894e238
    </div>
  )
}


export default App;
ReactDOM.render(<App/>, document.getElementById("root"));