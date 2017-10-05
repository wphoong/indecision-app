import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";

console.log("App.js is running");

//for BABEL in command line
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


class OldSyntax {
  constructor() {
    this.name = "Mike";
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return "HI, LUL " + this.name;
  }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

//---------

class NewSyntax {
  name = "Jen";
  getGreeting = () => {
    return "HI, LUL " + this.name;
  }
}

const newSyntax = new NewSyntax;
const newGetGreeting = newSyntax.getGreeting;

console.log(newGetGreeting());