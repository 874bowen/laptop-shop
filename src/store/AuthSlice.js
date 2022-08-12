import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {isLoggedIn: false},
    reducers: {
        // mutate state because now we are using reduxtoolkit it automatically makes a copy of the state
        login (state) { state.isLoggedIn = true; },
        logout (state) { state.isLoggedIn = false; },
    }
}) 

export const authActions = AuthSlice.actions;
export default AuthSlice;