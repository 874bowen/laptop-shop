import React  from 'react';
import { useSelector } from 'react-redux';
import Main from './components/MainComponent';
import Auth from './components/AuthComponent';

function App() {
  //grab state using useselector hook
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  const arr = useSelector((state) => state.cart.itemsList);
  console.log(arr);
  return(
    <div>
      { !isLoggedIn && <Auth/>}
      { isLoggedIn && <Main />}
    </div>
  );
}
export default App;
