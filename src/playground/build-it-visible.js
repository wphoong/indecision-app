console.log("Connected to build it visible");

let show = "Show Details";
let hidden = "";
const text = "Hey, you can see me now";

const onShow = () => {

  if (show == "Show Details") {
    show = "Hide Details";
    hidden = text;
  } else {
    show = "Show Details";
    hidden = "";
  }

  render();

};


let visibility = false;
  const toggleVisible = () => {
  visibility = !visibility;
  render();
};


const render = () => {

  const template = (
      <div>
        <h1>Visibility Toggle</h1>
        <br />
        <button onClick={onShow}>{show}</button>
        <p>{hidden}</p>

        <button onClick={ toggleVisible}>
          {visibility ? "Hide Details" : "Show Details "}
        </button>
        {visibility && (<div><p>No longer hidden</p></div>)}
      </div>
    );


  const appRoot = document.getElementById('app');
  ReactDOM.render(template, appRoot);

};

render();