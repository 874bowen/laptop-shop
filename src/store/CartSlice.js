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
            const prod = state.itemsList.find((item) => item.id === id);
            
            if (prod){
                if(prod.quantity > 1){
                    prod.totalQuantity--;
                    prod.totalPrice -= prod.price;
                }
            }
            else {
                const index = state.itemsList.indexOf(prod);
                state.itemsList.splice(index, 1);
            }
        },
    }
});

export const cartActions = CartSlice.actions;
export default CartSlice;