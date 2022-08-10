import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counter: 0},
    reducers: {
        increment(state, action){
            state.counter++;
        },
        decrement(state, action){
            state.counter--;
        },
        add(state, action){
            state.counter += action.payload;
        }
    },
});
const reducerFn = (state={counter: 0}, action) => {
    // limitations: 
    // should be a synchronous function
    // we shouldn't mutate the state rather just have a copy of original state
    switch (action.type) {
        case "INC":
            return {counter: state.counter+1};
            break;
        case "DEC":
            if (state.counter >0){
                return {counter: state.counter-1};
            }
            else {
                return {counter: state.counter};
            }
            break;
        case "ADD":
            return {counter: state.counter+ action.payload};
            break;
        default:
            break;
    }
    return state;
}
// export counterSlice action and import in the app.js
export const actions = counterSlice.actions;
const store = configureStore({ 
    reducer : counterSlice.reducer
});

export default store;