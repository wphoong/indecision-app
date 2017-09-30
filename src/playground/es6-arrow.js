console.log("connected");

const square = function (x) {
  return x * x;
};

console.log(square(2));

const square2 = (x) => {
  return x*x;
};

console.log(square2(2));

const square3 = (x) => x * x;

console.log(square3(3));

//Challenge get first name

const fullName = "Wilson Phoong";

const getFirstName = (x) => x.split(" ")[0];

console.log(getFirstName(fullName));