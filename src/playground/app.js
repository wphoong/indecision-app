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
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      
      if (options) {
        this.setState(() => ({options: options}));
      }
    } catch (e) {
      console.log("ERROR");
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length != this.state.options.length) {
      const json =  JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log("saving data");
    }
  }

  componentWillUnmount() {
    console.log("component unmounted");
  }

  handleDecision() {
    const random = Math.floor(Math.random() * this.state.options.length);
    const decision = this.state.options[random];
    alert(decision);
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove != option )
    }));
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exist";
    } 

    this.setState((prevState) => 
      ( { options: prevState.options.concat(option) } ) 
    );
  }


  render(){
    const subtitle = "Put your life in the hands of a computer";
  
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0} 
          handleDecision={this.handleDecision}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
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
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
    );
};

Header.defaultProps = {
  title: "Indecision App"
}

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
        {props.options.length === 0 && <p>Please add an option</p> }
        {
          props.options.map( (option) => 
            (
              <Option 
                key={option} 
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
              />
            )) 
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
      <p>{props.optionText}
        <button 
          onClick={(e)=> {
            props.handleDeleteOption(props.optionText);
          }
        }>
          Remove
        </button>
      </p>
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

    this.setState(() => ({ error: error}) );

    if (!error) {
      e.target.elements.optionInput.value = "";
    }

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
