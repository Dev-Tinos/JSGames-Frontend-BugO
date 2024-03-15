import React, { useEffect, useState } from "react";
import FriendTemplat from "../components/Templat/FriendTemplat";

const FriendPage = ({ isOpen, closeModal }) => {
    const [type, setType] = useState(0);

    // 모달이 열릴 경우 스크롤 방지
    useEffect(() => {
        const currentScrollY = window.scrollY;
        if (isOpen) {
            document.body.style.position = "fixed";
            document.body.style.width = "100%";
            document.body.style.top = `-${currentScrollY}px`;
            document.body.style.overflowY = "scroll";
        } else {
            document.body.style.position = "";
            document.body.style.width = "";
            document.body.style.top = "";
            document.body.style.overflowY = "";
            window.scrollTo(0, currentScrollY);
        }

        return () => {
            window.scrollTo(0, currentScrollY);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <FriendTemplat type={type} setType={setType} closeModal={closeModal} />
    );
};

export default FriendPage;
