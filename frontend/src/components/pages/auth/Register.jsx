import classNames from "classnames/bind";

import styles from "./Auth.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useGetAuthUserQuery, useRegisterMutation } from "@services/rootApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@redux/slices/authSlice";

const cx = classNames.bind(styles);

function Register() {
    const navigate = useNavigate();
    const [register] = useRegisterMutation();
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    });

    const token =
        useSelector((state) => state.auth.userInfo?.token) ||
        localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            navigate("/");
        }
    }, [token]);

    const handleInputChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await register(inputs).unwrap();
            if (res.user.token) {
                localStorage.setItem("token", res.user.token);
                navigate("/");
            }
            dispatch(login(res.user));
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className={cx("wrapper")}>
            <div className={cx("content")}>
                <h1 className={cx("heading")}>Register</h1>
                <form onSubmit={handleSubmit} className={cx("form-auth")}>
                    <label className={cx("form-label")} htmlFor="name">
                        Name:
                    </label>
                    <input
                        className={cx("form-input")}
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleInputChange}
                        value={inputs.name}
                    />
                    <label className={cx("form-label")} htmlFor="email">
                        Email:
                    </label>
                    <input
                        className={cx("form-input")}
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleInputChange}
                        value={inputs.email}
                    />
                    <label className={cx("form-label")} htmlFor="password">
                        Password:
                    </label>
                    <input
                        className={cx("form-input")}
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleInputChange}
                        value={inputs.password}
                    />
                    <button className={cx("form-btn")} type="submit">
                        Submit
                    </button>
                </form>
                <Link className={cx("auth-link")} to="/">
                    Trở về trang chủ
                </Link>
            </div>
        </div>
    );
}

export default Register;
