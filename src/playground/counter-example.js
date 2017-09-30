let count = 0;
const addOne = () => {
  count+=1;
  console.log("addOne", count);
  renderCounterApp();
};

const minusOne = () => {
  count-=1;
  console.log("minusOne", count);
  renderCounterApp();
};

const reset = () => {
  count = 0;
  console.log("reset", count);
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const template = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne} >+1</button>
      <button onClick={minusOne} >-1</button>
      <button onClick={reset} >Reset</button>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderCounterApp();