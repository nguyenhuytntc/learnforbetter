import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "@components/pages/HomePage/HomePage";
import Login from "@components/pages/auth/Login";
import Register from "@components/pages/auth/Register";

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [{ path: "/", element: <HomePage /> }],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);

export default router;
