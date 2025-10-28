import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import authReducer from "@redux/slices/authSlice";
import { rootApi } from "@services/rootApi";

const persistConfig = {
    key: "root",
    storage,
    blacklist: [rootApi.reducerPath],
};

const rootReducer = combineReducers({
    auth: authReducer,
    [rootApi.reducerPath]: rootApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: {
                // Ignore redux-persist actions
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }).concat(rootApi.middleware);
    },
});

export const persistor = persistStore(store);

export default store;
