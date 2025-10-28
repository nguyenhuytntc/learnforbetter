import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import GlobalStyles from "@components/GlobalStyles";
import { Provider } from "react-redux";
import store, { persistor } from "@redux/store";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <GlobalStyles>
            <PersistGate persistor={persistor}>
                <Provider store={store}>
                    <RouterProvider router={router} />
                </Provider>
            </PersistGate>
        </GlobalStyles>
    </StrictMode>
);
