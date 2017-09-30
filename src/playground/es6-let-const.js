var nameVar = "Wilson";
var nameVar = "Mike";
console.log('nameVar', nameVar);


let nameLet = "Jen";
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

//Block scoping

var fullName = "Wilson P";

if (fullName) {
  const firstName = fullName.split(" ")[0];
  console.log(firstName);
}

//This wont work becuz const and let variables are block scoped
console.log(firstName);



//JSX Example

// const app = {
//   title: "Indecision App",
//   // subtitle: "LUL",
//   // options: ["One", "Two"],
// };

// const template = (
//     <div>
//       <h1>{app.title}</h1>
//       { app.subtitle && <p>{app.subtitle} </p> }
//       <p>{ (app.options && app.options.length > 0) ? app.options : "No Options"}</p>
//     </div>
//   );

// const user = {
//   name: "Andrew",
//   age: 99,
//   location: "Las Vegas",
// };

// function getLocation(location) {
//   if (location) {
//     return <p>City: {location}</p>;
//   }
// };

// const wilson = (
//     <div>
//       <h1>Name: { user.name ? user.name : "Anonymous" }</h1>
//       { (user.age && user.age >= 18) && <p>Age: { user.age }</p> }
//       {getLocation(user.location)}
//     </div>
//   );


// const appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);

