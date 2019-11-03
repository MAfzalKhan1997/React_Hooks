import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(5);
  const [condition, setCondition] = useState(true);
  const [mounted, setMounted] = useState(0);
  const [unmounted, setUnmounted] = useState(0);

  useEffect(() => {
    alert("This Occurs only on ComponentDidMount");
    return () => alert("This Occurs on ComponentWillUnMount");
  }, []);

  useEffect(() => {
    setMounted(count);
    return () => setUnmounted(count);
  }, [condition, count]);

  return (
    <div className="App">
      <h2>Hello World</h2>
      <h3> Count : {count} </h3>
      <button onClick={() => setCount(count + 1)}>Inc +</button>
      <button onClick={() => setCount(count - 1)}>Dec -</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCondition(!condition)}>
        Click Me to see changes!
      </button>
      <p>ComponentDidMount/Update ===>>> : {mounted}</p>
      <p>ComponentWillUnmount ===>>> : {unmounted}</p>
      <p></p>
    </div>
  );
}

export default App;
