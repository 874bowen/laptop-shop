import { configureStore } from '@reduxjs/toolkit';


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

const store = configureStore({ reducer : reducerFn});

export default store;