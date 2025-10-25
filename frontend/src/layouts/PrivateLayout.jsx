import Navbar from "@components/Navbar";
import { logout, saveUserInfo } from "@redux/slices/authSlice";
import { useGetAuthUserQuery } from "@services/rootApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function PrivateLayout() {
    const response = useGetAuthUserQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        console.log(response.data);
        if (response) {
            // dispatch(saveUserInfo(data));
        } else {
            // localStorage.removeItem("token");
            // dispatch(logout());
            navigate("/login");
        }
    }, [response]);
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default PrivateLayout;
