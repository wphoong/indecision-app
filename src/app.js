console.log("App.js is running");

//JSX - JavaScript XML

//for BABEL in command line
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch


class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // options: ["Eat Pizza" , "Own plebs at Dota", "Learn React"]
      options: []
    };
    this.handleDecision = this.handleDecision.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleDecision() {
    const random = Math.floor(Math.random() * this.state.options.length);
    const decision = this.state.options[random];
    alert(decision);
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exist";
    } 

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }


  render(){
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer";
  
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0} 
          handleDecision={this.handleDecision}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
      );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
    );
};

// class Header extends React.Component {
//   render()  {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//       );
//   }
// }

const Action = (props) => {
  return (
    <div>
      <button 
         onClick={props.handleDecision}
         disabled={!props.hasOptions}
         >
           What should I do?
      </button>
    </div>
    );
}

// class Action extends React.Component {

//   render() {
//     return (
//       <div>
//         <button 
//           onClick={this.props.handleDecision}
//           disabled={!this.props.hasOptions}
//           >
//             What should I do?
//         </button>
//       </div>
//       );
//   }
// }

const Options = (props) => {
  return (
      <div>
        <h2>Options component go here</h2>
        {
          props.options.map( (option) => <Option key={option} optionText={option} /> ) 
        }
        <button onClick={props.handleDeleteOptions}>Remove All Options</button>
      </div>
      );
};

// class Options extends React.Component {

//   render() {
//     return (
//       <div>
//         <h2>Options component go here</h2>
//         {
//           this.props.options.map( (option) => <Option key={option} optionText={option} /> ) 
//         }
//         <button onClick={this.props.handleDeleteOptions}>Remove All Options</button>
//       </div>
//       );
//   }
// }

const Option = (props) => {
  return (
    <div>
      <p>{props.optionText}</p>
    </div>
    );
};

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>{this.props.optionText}</p>
//       </div>
//       );
//   }
// }

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    const inputText =  e.target.elements.optionInput.value.trim();
    const error = this.props.handleAddOption(inputText);

    this.setState(() => {
      return {
        error: error
      };
    });    

  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption} >
          <input type="text" name="optionInput" />
          <button>Add Option</button>
        </form>
      </div>
      );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
