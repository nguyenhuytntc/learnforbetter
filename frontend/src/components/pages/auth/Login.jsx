import classNames from "classnames/bind";

import styles from "./Auth.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("content")}>
                <h1 className={cx("heading")}>Login</h1>
                <form className={cx("form-auth")}>
                    <label className={cx("form-label")} htmlFor="email">
                        Email:
                    </label>
                    <input
                        className={cx("form-input")}
                        type="email"
                        name="email"
                        id="email"
                    />
                    <label className={cx("form-label")} htmlFor="password">
                        Password:
                    </label>
                    <input
                        className={cx("form-input")}
                        type="password"
                        name="password"
                        id="password"
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

export default Login;
