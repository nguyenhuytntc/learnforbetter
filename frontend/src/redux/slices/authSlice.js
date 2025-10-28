import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null,
    accessToken: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            state.userInfo = action.payload.user;
            state.accessToken = action.payload.accessToken;
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
