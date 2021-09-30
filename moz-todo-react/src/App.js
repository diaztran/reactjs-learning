// THREE MAIN PARTS

// Part 1 : Importing
import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Part 2: App component
function App(props) {
  console.log("props" + props);
  const subject = props.subject;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, {subject}!</p>
      </header>
    </div>
  );
}

// Part 3: Exporting
export default App;
