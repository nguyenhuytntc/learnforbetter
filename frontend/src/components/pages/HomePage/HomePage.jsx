import classNames from "classnames/bind";
import DOMPurify from "dompurify";

import styles from "./HomePage.module.scss";
import { useGetQuoteQuery } from "@services/quoteApi";

const cx = classNames.bind(styles);

function HomePage() {
    const { data } = useGetQuoteQuery();

    return (
        <div className={cx("wrapper")}>
            <div className={cx("list-quotes")}>
                {data?.quotes.map((item) => (
                    <div
                        key={item._id}
                        className={cx("quote")}
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(item.content),
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
