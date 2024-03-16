import React, { useState } from 'react';
import './App.css';

function Welcome() {
  return (
    <div>
      <h1>
        Welcome to the site where you can calculate how badly you need to go!
      </h1>
    </div>
  );
}

function GoButton(props: any) {
  return (
    <div>
      <button onClick={props.onClickFunction}>GoButton</button>
    </div>
  );
}

function GoGoLevel(props: any) {
  return (
    <div>
      <label>Amount of Go: {props.numberToShow}</label>
    </div>
  );
}

function App() {
  const [goLevel, updateLevel] = useState(1);
  const incrementGo = () => updateLevel(goLevel * 2);

  return (
    <div className="App">
      <Welcome />
      <GoButton onClickFunction={incrementGo} />
      <GoGoLevel numberToShow={goLevel} />
    </div>
  );
}

export default App;
