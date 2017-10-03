
console.log("App.js is running");

//JSX - JavaScript XML

//for BABEL in command line
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch


class IndecisionApp extends React.Component {
  render(){
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer";
    let options = ["LUL", "Kappa", "Krappa"];
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options} />
        <AddOption option={options}/>
      </div>
      );
  }
}

class Header extends React.Component {
  render()  {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
      );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("handle pick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
      );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll() {
    console.log(this.props.options);
  }

  render() {
    return (
      <div>
        <h2>Options component go here</h2>
        {
          this.props.options.map( (option) => <Option key={option} optionText={option} /> ) 
        }
        <button onClick={this.handleRemoveAll}>Remove All Options</button>
      </div>
      );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.optionText}</p>
      </div>
      );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const inputText =  e.target.elements.optionInput.value.trim();
    
    if (inputText) {
      console.log(inputText)
    }
  }

  render() {
    return (
      <div>
        <h2>Add Option component here</h2>

        <form onSubmit={this.handleAddOption} >
          <input type="text" name="optionInput" />
          <button>Add Option</button>
        </form>
      </div>
      );
  }
}

let counter = 0;
const addOne = () => {
  console.log({counter});
  counter++;
  render();
};

const removeOne = () => {
  counter--;
  console.log({counter});
  render();
};


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
