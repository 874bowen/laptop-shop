import React, { useEffect }  from 'react';
import { useSelector } from 'react-redux';
import Main from './components/MainComponent';
import Auth from './components/AuthComponent';

function App() {
  //grab state using useselector hook
  //let redux manage state then later update the state
  const cart = useSelector(state => state.cart);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // console.log(isLoggedIn);
  // const arr = useSelector((state) => state.cart.itemsList);
  // console.log(arr);
  // will have a callback function with an array of dependencies

  useEffect(() => {
    const sendRequest = async () => {
      const res = await fetch('https://redux-shopping-7c9ee-default-rtdb.firebaseio.com/cartitems.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      } 
    );
    const data = await res.json();
    };
    sendRequest();
  }, [cart]);
  return(
    <div>
      { !isLoggedIn && <Auth/>}
      { isLoggedIn && <Main />}
    </div>
  );
}
export default App;
