console.log("Connected to build it visible");

// let show = "Show Details";
// let hidden = "";
// const text = "Hey, you can see me now";

// const onShow = () => {

//   if (show == "Show Details") {
//     show = "Hide Details";
//     hidden = text;
//   } else {
//     show = "Show Details";
//     hidden = "";
//   }

//   render();

// };


// let visibility = false;
// const toggleVisible = () => {
//   visibility = !visibility;
//   render();
// };


// const render = () => {

//   const template = (
//       <div>
//         <h1>Visibility Toggle</h1>
//         <br />
//         <button onClick={onShow}>{show}</button>
//         <p>{hidden}</p>

//         <button onClick={ toggleVisible}>
//           {visibility ? "Hide Details" : "Show Details "}
//         </button>
//         {visibility && (<div><p>No longer hidden</p></div>)}
//       </div>
//     );


//   const appRoot = document.getElementById('app');
//   ReactDOM.render(template, appRoot);

// };

// render();


//REACT version

class VisibilityToggle extends React.Component {

  constructor(props) {
    super(props);

    this.handleVisible = this.handleVisible.bind(this);

    this.state = {
      visible: false
    };
  }

  handleVisible() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility App</h1>
        <button onClick={this.handleVisible} >{ this.state.visible ? "Hide Text" : "Show details" }</button>
        { this.state.visible && 
          (
            <div>
              <p>This is hidden text</p>
            </div>
          )}
      </div>
      );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



