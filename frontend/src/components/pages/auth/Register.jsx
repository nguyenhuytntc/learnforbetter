import classNames from "classnames/bind";

import styles from "./Auth.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "@services/rootApi";
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
    const [errors, setErrors] = useState({
        name: [],
        email: [],
        password: [],
    });

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
            const res = await register(inputs).unwrap();

            if (res.user) {
                dispatch(
                    login({ user: res.user, accessToken: res.accessToken })
                );
                navigate("/create-quote");
            }
        } catch (error) {
            setErrors(error.data.errors);
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
                    {errors?.name?.length > 0 && (
                        <ul>
                            {errors.name.map((error, index) => (
                                <li className={cx("form-error")} key={index}>
                                    {error}
                                </li>
                            ))}
                        </ul>
                    )}
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
                    {errors?.email?.length > 0 && (
                        <ul>
                            {errors.email.map((error, index) => (
                                <li className={cx("form-error")} key={index}>
                                    {error}
                                </li>
                            ))}
                        </ul>
                    )}
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
                    {errors?.password?.length > 0 && (
                        <ul>
                            {errors.password.map((error, index) => (
                                <li className={cx("form-error")} key={index}>
                                    {error}
                                </li>
                            ))}
                        </ul>
                    )}
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
