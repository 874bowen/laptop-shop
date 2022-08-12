import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import {actions} from './store/index';
import Main from './components/MainComponent';
import Auth from './components/AuthComponent';

function App() {
  //grab state using useselector hook
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return(
    // <Main />
    <div>
      { !isLoggedIn && <Auth/>}
      { isLoggedIn && <Main />}
    </div>
  );
}
export default App;
