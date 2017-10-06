import React from "react";
import Option from "./Option";

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button 
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
         Remove All Options
      </button>
    </div>
    <div>
      {props.options.length === 0 && 
        <p className="widget-header widget-header--option"
        >
          Please add an option
        </p> }
        {
          props.options.map( (option, index) => 
            (
              <Option 
                 key={option} 
                 optionText={option}
                 count={index + 1}
                 handleDeleteOption={props.handleDeleteOption}
               />
            )) 
        }
      </div>
  </div>
);


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