import Quill from "quill";
import React, { forwardRef, useEffect, useRef } from "react";

// Editor is an uncontrolled React component
const Editor = forwardRef(({ defaultValue }, ref) => {
    const containerRef = useRef(null);
    const defaultValueRef = useRef(defaultValue);

    useEffect(() => {
        const container = containerRef.current;
        const editorContainer = container.appendChild(
            container.ownerDocument.createElement("div")
        );
        const quill = new Quill(editorContainer, {
            theme: "snow",
            modules: {
                toolbar: [
                    ["bold", "italic"],
                    ["link", "image"],
                ],
            },
        });

        ref.current = quill;

        if (defaultValueRef.current) {
            quill.setContents(defaultValueRef.current);
        }

        quill.on(Quill.events.TEXT_CHANGE);

        quill.on(Quill.events.SELECTION_CHANGE);

        return () => {
            ref.current = null;
            container.innerHTML = "";
        };
    }, [ref]);

    return <div ref={containerRef}></div>;
});

Editor.displayName = "Editor";

export default Editor;
