import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import {actions} from './store/index';
import Main from './components/MainComponent';

function App() {
  return(
    <Main />
  );
}
export default App;
