import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "@components/pages/HomePage/HomePage";
import Login from "@components/pages/auth/Login";
import Register from "@components/pages/auth/Register";
import CreateQuote from "@components/CreateQuote/CreateQuote";
import PrivateLayout from "./layouts/PrivateLayout";

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [{ path: "/", element: <HomePage /> }],
    },
    {
        element: <PrivateLayout />,
        children: [{ path: "/create-quote", element: <CreateQuote /> }],
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
