import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import {actions} from './store/index';
import Main from './components/MainComponent';
import Auth from './components/AuthComponent';

function App() {
  return(
    // <Main />
    <Auth />
  );
}
export default App;
