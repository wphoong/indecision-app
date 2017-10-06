import React from "react";

const Option = (props) => (
  <div className="option">
    <p className="option__text">{props.count}. {props.optionText}</p>
    <button 
        className="button button--link"
        onClick={(e)=> {
          props.handleDeleteOption(props.optionText);
        }
      }>
        Remove
      </button>
  </div>
);


export default Option;

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>{this.props.optionText}</p>
//       </div>
//       );
//   }
// }