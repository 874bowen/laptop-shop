import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './AuthSlice';
import CartSlice from './CartSlice';
import uiSlice from './UiSlice';

// create store then pass in the reducer 
const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer,
        cart: CartSlice.reducer,
        ui: uiSlice.reducer
    },
});
export default store;