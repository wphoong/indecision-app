import React from "react";
import Header from "./Header"
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";

export default class IndecisionApp extends React.Component {
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