import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            state.userInfo = action.payload;
        },
        logout: () => {
            return initialState;
        },
        saveUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
    },
});

export const { login, logout, saveUserInfo } = authSlice.actions;
export default authSlice.reducer;
