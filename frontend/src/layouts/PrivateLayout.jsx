import Navbar from "@components/Navbar";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Outlet, useNavigate } from "react-router-dom";

function PrivateLayout() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.userInfo);

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default PrivateLayout;
