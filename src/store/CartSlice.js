import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: { 
        itemsList: [],
        totalQuantity: 0,
        showCart: false,
    },
    reducers: {
        addToCart (state, action) {
            const newItem = action.payload;
            // check for existance of same product
            const existingItem = state.itemsList.find((item) => item.id === newItem.id);

            if ( existingItem ) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else{
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name,
                });
            }
            state.totalQuantity++; 
        },
        removeItem (state, action) {
            // remove an item from 2 or more
            const id = action.payload;
            const existingItem = state.itemsList.find((item) => item.id === id);
            if (existingItem.quantity === 1){
                state.itemsList = state.itemsList.filter((item) => item.id !== id);
                state.totalQuantity--;
            }
            else {
                existingItem.quantity -= 1;
                existingItem.totalPrice -= existingItem.price;
                state.totalQuantity--;
            }
        },
        showCart (state) {
            state.showCart = !state.showCart;
        },
    }
});

export const cartActions = CartSlice.actions;
export default CartSlice;