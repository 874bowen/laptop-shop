import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from './components/MainComponent';
import Auth from './components/AuthComponent';
import Notification from './components/NotificationComponent';
import { uiActions } from './store/UiSlice';

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
    const sendRequest = async () => {
      // send state as Sending request
      dispatch(uiActions.showNotification({
        open: true,
        message: 'Sending Request ... ',
        type: 'warning'
      }));
      const res = await fetch('https://redux-shopping-7c9ee-default-rtdb.firebaseio.com/cartitems.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      }
    );
    const data = await res.json(); // successfull
    // send state as Request is successful
    dispatch(uiActions.showNotification({
      open: true,
      message: 'Sent Request to Database Successfully',
      type: 'success'
    }));
    };
    sendRequest().catch(err => {
      // send state as Error
      dispatch(uiActions.showNotification({
        open: true,
        message: 'Sending Request Failed',
        type: 'error'
      }));
    });
  }, [cart]);
  return(
    <div>
      { notification && <Notification type={notification.type} message={notification.message} /> }
      { !isLoggedIn && <Auth/>}
      { isLoggedIn && <Main />}
    </div>
  );
}
export default App;
