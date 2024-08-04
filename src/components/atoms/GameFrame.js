import React, { useRef, useState } from "react";
import styled from "styled-components";
import PreventArrowKeyScroll from "../../services/function/PreventArrowKeyScroll";

const FrameStyle = styled.div`
    width: 1280px;
    height: 800px;
    background-color: #ffffff;
    margin: auto;
    iframe {
        width: 1280px;
        height: 800px;
        border-width: 0px;
        &:focus {
            background-color: red;
        }
        overflow: hidden;
    }
`;

const GameFrame = ({ gameUrl }) => {
    const [error, setError] = useState(null);
    const userId = localStorage.getItem("userId");
    const iframeRef = useRef(null);

    const isProtocolValid = (url) => {
        try {
            const urlObject = new URL(url);
            return (
                urlObject.protocol === "http:" ||
                urlObject.protocol === "https:"
            );
        } catch (error) {
            return false;
        }
    };

    const handleIframeError = () => {
        setError("Invalid protocol. Please use HTTP or HTTPS.");
    };

    return (
        <FrameStyle>
            {error ? (
                <p>{error}</p>
            ) : (
                <iframe
                    id="game"
                    ref={iframeRef}
                    src={
                        isProtocolValid(gameUrl)
                            ? `${gameUrl}?userId=${userId}`
                            : ""
                    }
                    title="게임 화면"
                    onError={handleIframeError}
                ></iframe>
            )}
            <PreventArrowKeyScroll />
        </FrameStyle>
    );
};

export default GameFrame;
