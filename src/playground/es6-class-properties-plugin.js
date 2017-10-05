//add babel-plugin-transform-class-properties as a dependency
//add it as a preset in .babelrc

//Example of old syntax and new syntax using preset

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