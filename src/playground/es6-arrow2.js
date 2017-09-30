console.log("Connected!");

//arguments object -- node longer bound with arrow functions

const add = function(a,b) {
  console.log(arguments);
  return a + b;
};

console.log(add(55, 1, 1001));

const add2 = (a, b) => {
  return a + b;
}

console.log(add2(55, 1, 1001));


//this keyword - no longer bound 

const user = {
  name: "Wilson",
  cities: ["LA", "SF", "LV"],
  // printPlacesLived: function () {
  //   this.cities.forEach((x)=>{
  //     console.log(this.name + " has lived in " + x);
  //   });
  // }
  printPlacesLived () {
    return this.cities.map((city) => console.log(this.name + " has lived in " + city) ); 
  },

};

user.printPlacesLived();

const multiply = {
  numbers: [1,2,3],
  multiplyBy: 2,
  doMultiply () {
    return this.numbers.map( (num) => num * this.multiplyBy );
  },
};

console.log(multiply.doMultiply());

