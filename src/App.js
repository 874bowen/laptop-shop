import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from './components/MainComponent';
import Auth from './components/AuthComponent';
import Notification from './components/NotificationComponent';
import { uiActions } from './store/UiSlice';
import { sendCartData } from './store/CartSlice';

let isFirstRender = true; 
function App() {
  //grab state using useselector hook
  //let redux manage state then later update the state
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  // console.log(isLoggedIn);
  // const arr = useSelector((state) => state.cart.itemsList);
  // console.log(arr);
  // will have a callback function with an array of dependencies

  useEffect(() => {
    if (isFirstRender){
      isFirstRender = false;
      return;
    }
    // thunk data
    dispatch(sendCartData(cart));
    
  }, [cart,dispatch]);
  return(
    <div>
      { notification && <Notification type={notification.type} message={notification.message} /> }
      { !isLoggedIn && <Auth/>}
      { isLoggedIn && <Main />}
    </div>
  );
}
export default App;
