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

function GoButton() {
  const [goLevel, updateLevel] = useState(1);
  const incrementGo = () => updateLevel(goLevel * 2);

  return (
    <div>
      <button onClick={incrementGo}>GoButton</button>
      <br></br>
      <br></br>
      <label>Amount of Go: {goLevel}</label>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <GoButton />
    </div>
  );
}

export default App;
