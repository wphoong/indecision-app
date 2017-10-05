import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  // constructor(props) {
  //   super(props);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  // }

  handleAddOption = (e) => {
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