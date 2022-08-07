import React, { Component } from 'react';
import { useSelector } from 'react-redux';

function App() {
  // pass callback function
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Counter App</h1>
      <h2> This is {counter}</h2>
    </div>
  );
}

export default App;
