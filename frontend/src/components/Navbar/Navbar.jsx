import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./Navbar.module.scss";

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={cx("wrapper")}>
            <div className="container">
                <div className={cx("nav-content")}>
                    <div className={cx("nav-logo")}>
                        <Link to="/" className={cx("logo-title")}>
                            <h1>Hùy Nguyễn</h1>
                        </Link>
                    </div>
                    <ul className={cx("menu-list")}>
                        <li className={cx("menu-item")}>
                            <Link to="/blog" className={cx("menu-link")}>
                                Blog
                            </Link>
                        </li>
                        <li className={cx("menu-item")}>
                            <Link to="/from-books" className={cx("menu-link")}>
                                Từ Sách
                            </Link>
                        </li>
                        <li className={cx("menu-item")}>
                            <Link to="/coding" className={cx("menu-link")}>
                                Code Chill
                            </Link>
                        </li>
                        <li className={cx("menu-item")}>
                            <Link
                                to="/create-quote"
                                className={cx("menu-link")}
                            >
                                Create Quote
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Navbar;
