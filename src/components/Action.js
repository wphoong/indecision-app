import React from "react";

const Action = (props) => (
  <div>
    <button 
        onClick={props.handleDecision}
        disabled={!props.hasOptions}
        >
          What should I do?
    </button>
  </div>
);

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

export default Action;