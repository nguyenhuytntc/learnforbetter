import { useUploadImageMutation } from "@services/uploadApi";
import Quill from "quill";
import React, { forwardRef, useEffect, useRef } from "react";

// Editor is an uncontrolled React component
const Editor = forwardRef(({ defaultValue }, ref) => {
    const containerRef = useRef(null);
    const defaultValueRef = useRef(defaultValue);
    const [uploadImage] = useUploadImageMutation();

    useEffect(() => {
        const container = containerRef.current;
        const editorContainer = container.appendChild(
            container.ownerDocument.createElement("div")
        );
        const quill = new Quill(editorContainer, {
            theme: "snow",
            modules: {
                toolbar: {
                    container: [
                        ["bold", "italic"],
                        ["link", "image"],
                    ],
                    handlers: {
                        image: function () {
                            const input = document.createElement("input");
                            input.setAttribute("type", "file");
                            input.setAttribute("accept", "image/*");
                            input.click();

                            input.onchange = async () => {
                                const file = input.files[0];
                                const formData = new FormData();
                                formData.append("image", file);

                                try {
                                    const res = await uploadImage(
                                        formData
                                    ).unwrap();

                                    const imageUrl = res.url;

                                    const range = quill.getSelection();
                                    quill.insertEmbed(
                                        range.index,
                                        "image",
                                        imageUrl
                                    );
                                } catch (err) {
                                    console.error("Upload failed", err);
                                }
                            };
                        },
                    },
                },
            },

            placeholder: "Write something ...",
        });

        ref.current = quill;

        if (defaultValueRef.current) {
            quill.setContents(defaultValueRef.current);
        }

        quill.on(Quill.events.TEXT_CHANGE, () => {});

        quill.on(Quill.events.SELECTION_CHANGE, () => {});

        return () => {
            ref.current = null;
            container.innerHTML = "";
        };
    }, [ref]);

    return <div ref={containerRef}></div>;
});

Editor.displayName = "Editor";

export default Editor;
