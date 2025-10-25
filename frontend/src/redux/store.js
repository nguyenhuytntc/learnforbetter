import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "@redux/slices/authSlice";
import { rootApi } from "@services/rootApi";

const rootReducer = combineReducers({
    auth: authReducer,
    [rootApi.reducerPath]: rootApi.reducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(rootApi.middleware);
    },
});

export default store;
