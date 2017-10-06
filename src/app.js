import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

console.log("App.js is running");

//for BABEL in command line
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

