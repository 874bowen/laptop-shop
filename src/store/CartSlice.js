import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: { 
        itemsList: [],
        totalQuantity: 0,
        showCart: false,
    },
    reducers: {
        increment (state) { state.totalQuantity++; },
        decrement (state) { state.items--; },
        addItems (state, item){ state.itemsList.push(item); }
    }
});

export const cartActions = CartSlice.actions;
export default CartSlice;