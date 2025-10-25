import classNames from "classnames/bind";

import styles from "./CreateQuote.module.scss";

const cx = classNames.bind(styles);

function CreateQuote() {
    return (
        <div className={cx("wrapper")}>
            <form className={cx("form-quote")}>
                <textarea
                    name="quote"
                    id="quote"
                    placeholder="Something ..."
                    rows={5}
                    className={cx("form-input")}
                />
                <button className={cx("btn-submit")} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default CreateQuote;
