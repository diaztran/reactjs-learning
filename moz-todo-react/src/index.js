import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const DATA = [{ id: "todo-0", title: "Eat", completed: true }];

const BUTTON_FILTER = [
  { filterType: "All" },
  { filterType: "Active" },
  { filterType: "Completed" },
];

ReactDOM.render(
  <App tasks={DATA} btnfilters={BUTTON_FILTER} />,
  // <React.StrictMode>
  // As HTML have attributes, React has "prop". Props are written inside component calls
  // and user the same syntax as HTML attributes.
  // <App subject="Captain Of Spirit" />,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
