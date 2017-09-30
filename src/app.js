
console.log("App.js is running");

//JSX - JavaScript XML

//for BABEL in command line
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["Eat Pizza"],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
     app.options.push(option);
     e.target.elements.option.value = '';
     indecisionApp();
  }

};

const onRemoveAll = () => {
  app.options = [];
  indecisionApp();
}

const onMakeDecision = () => {
  const randomNum = Math.floor( Math.random() * app.options.length );
  const option = app.options[randomNum];
  console.log(option);
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];


const indecisionApp = () => {

  const template = (
    <div>
      <h1>{app.title}</h1>
      { app.subtitle && <p>{app.subtitle}</p>}
      <p>{ (app.options && app.options.length > 0) ? "Options" : "No options" }</p>
      <button disabled={ app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>

      <button onClick={onRemoveAll}>Remove All Options</button>

      <ol>
       {
          app.options.map( (option)=> {
            return <li key={option}>{option}</li>;
          })
        }
      </ol>

      <form onSubmit={onFormSubmit} >
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>


    </div>
  );

  ReactDOM.render(template, appRoot);
};

indecisionApp();
