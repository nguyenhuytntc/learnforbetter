import classNames from "classnames/bind";

import styles from "./Auth.module.scss";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "@services/rootApi";
import { useState } from "react";

const cx = classNames.bind(styles);

function Register() {
    const [register, { isLoading }] = useRegisterMutation();
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(inputs);
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
