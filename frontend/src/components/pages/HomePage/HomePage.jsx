import classNames from "classnames/bind";

import styles from "./HomePage.module.scss";

const cx = classNames.bind(styles);

function HomePage() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("list-quotes")}>
                <p className={cx("quote")}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Atque ex libero accusamus quae unde nulla perferendis nemo.
                    Veritatis, maxime ea. Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Atque ex libero accusamus quae
                    unde nulla perferendis nemo. Veritatis, maxime ea.
                </p>
                <p className={cx("quote")}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur recusandae iste quam enim totam, natus quod esse
                    omnis? Itaque, commodi.
                </p>
            </div>
        </div>
    );
}

export default HomePage;
