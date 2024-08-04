import { useEffect } from "react";

const PreventArrowKeyScroll = () => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (
                ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(
                    e.key
                )
            ) {
                e.preventDefault();
            }
        };
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return null;
};

export default PreventArrowKeyScroll;
