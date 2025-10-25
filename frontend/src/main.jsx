import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import GlobalStyles from "@components/GlobalStyles";
import { Provider } from "react-redux";
import store from "@redux/store";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <GlobalStyles>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </GlobalStyles>
    </StrictMode>
);
