import classNames from "classnames/bind";

import styles from "./Auth.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "@services/rootApi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { login } from "@redux/slices/authSlice";

const cx = classNames.bind(styles);

function Login() {
    const navigate = useNavigate();
    const [loginRequest] = useLoginMutation();
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const user = useSelector((state) => state.auth.userInfo);

    useEffect(() => {
        if (user) {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    const handleInputChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await loginRequest(inputs).unwrap();
            dispatch(login({ user: res.user, accessToken: res.accessToken }));
        } catch (error) {
            setError(error.data.message);
        }
    };
    return (
        <div className={cx("wrapper")}>
            <div className={cx("content")}>
                <h1 className={cx("heading")}>Login</h1>
                <form onSubmit={handleSubmit} className={cx("form-auth")}>
                    <label className={cx("form-label")} htmlFor="email">
                        Email:
                    </label>
                    <input
                        className={cx("form-input")}
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleInputChange}
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
                    />
                    {error && <li className={cx("form-error")}>{error}</li>}
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

export default Login;
