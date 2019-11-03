import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>Hello World</h2>
      <h3> Count : {count} </h3>
      <button onClick={() => setCount(count + 1)}>Inc +</button>
      <button onClick={() => setCount(count - 1)}>Dec -</button>
    </div>
  );
}

export default App;
