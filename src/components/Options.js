import React from "react";
import Option from "./Option";

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

export default Options;