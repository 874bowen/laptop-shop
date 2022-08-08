import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'reactstrap'

function App() {
  // pass callback function
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {dispatch({type: 'INC'});}
  const decrement = () => {dispatch({type: 'DEC'});}
  const add = () => {dispatch({type: 'ADD', payload: 10});}
  return (
    <div className='container'>
      <div className='row mt-5'>
        <div>
          <h1>Counter App</h1>
          <h2> This is {counter}</h2>
          <Button onClick={increment} className='outline success'>Increment</Button>
          <Button outline onClick={decrement} className='outline success'>Decrement</Button>
          <Button onClick={add} className='outline success'>Add 10</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
