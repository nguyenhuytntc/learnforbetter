import DOMPurify from "dompurify";

import classNames from "classnames/bind";

import styles from "./CreateQuote.module.scss";
import { useRef, useState } from "react";
import { useCreateQuoteMutation } from "@services/quoteApi";
import { useNavigate } from "react-router-dom";
import { Delta } from "quill";
import Editor from "./Editor";

const cx = classNames.bind(styles);

function CreateQuote() {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [createQuote] = useCreateQuoteMutation();

    // Use a ref to access the quill instance directly
    const quillRef = useRef();

    const handleSubmit = async () => {
        const rawHTML = quillRef.current.root.innerHTML;
        const plainText = quillRef.current.getText(); // Plain text

        try {
            if (!plainText.trim()) {
                setError("Please insert something!");
                return;
            }
            console.log(rawHTML);
            const res = await createQuote({ content: rawHTML }).unwrap();
            if (res) {
                navigate("/");
            }
        } catch (error) {
            setError(error.data.message);
        }
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("form")}>
                <Editor ref={quillRef} />
                {error && <p className="form-error">{error}</p>}
                <button className={cx("btn-submit")} onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default CreateQuote;
