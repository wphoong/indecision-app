console.log("Connected to es6 classes 1");

//Create a person class

class Person {
  constructor(name="Goku", age=99, location="Planet Z") {
    this.name = name;
    this.age = age;
    this.location = location;
  }

  getGreeting() {
    return `Hi, I am ${this.name}!`;
  }

  getDescription() {
    return `Hi, I am ${this.name} and am ${this.age} years old`;
  }
}


const wilson = new Person("wilson", 12, "LA");
const other = new Person();
console.log(wilson.getDescription());
console.log(other.getDescription());



class Student extends Person {
  constructor(name, age, location, magic) {
    super(name, age);
    this.magic = magic;
  }

  hasMagic() {
    return !!this.magic;
  }

  getMagic() {
    return `My magic is ${this.magic}`;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMagic()) {
      description += ` and my magic is ${this.magic}`
    }

    return description;
  }
  
}


const natsu = new Student("Natsu", 15, "Magnolia", "Fire");
const unknown = new Student();
console.log(natsu.getDescription());
console.log(natsu.hasMagic());
console.log(natsu.getMagic());
console.log(unknown.hasMagic());


class Traveler extends Person{
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let description = super.getGreeting();

    if (this.hasHomeLocation()) {
      description += ` and I'm from ${this.homeLocation}`
    }
    return description;

  }
}


const arima = new Traveler("Arima Kousei", 15, "Tokyo, Japan");
const noOne = new Traveler();

console.log(arima.getGreeting());
console.log(noOne.getGreeting());