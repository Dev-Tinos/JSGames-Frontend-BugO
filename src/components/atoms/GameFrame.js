import React, { useRef, useState } from "react";
import styled from "styled-components";

const FrameStyle = styled.div`
    width: 1280px;
    height: 800px;
    background-color: #fff;
    margin: auto;
    iframe {
        width: 1280px;
        height: 800px;
        border-width: 0px;
    }
`;

const GameFrame = ({ gameUrl }) => {
    const [error, setError] = useState(null);
    const userId = localStorage.getItem("userId");

    const isProtocolValid = (url) => {
        try {
            const urlObject = new URL(url);
            return (
                urlObject.protocol === "http:" ||
                urlObject.protocol === "https:"
            );
        } catch (error) {
            // URL 파싱 중 에러가 발생하면 프로토콜이 아닌 것으로 처리
            return false;
        }
    };

    const handleIframeError = () => {
        setError("Invalid protocol. Please use HTTP or HTTPS.");
    };

    const iframeRef = useRef(null);

    const sendDataToIframe = () => {
        const dataToSend = localStorage.getItem("userId");
        iframeRef.current.contentWindow.postMessage(dataToSend, "*");
    };

    return (
        <FrameStyle>
            {error ? (
                <p>{error}</p>
            ) : (
                <iframe
                    ref={iframeRef}
                    src={
                        isProtocolValid(gameUrl)
                            ? `${gameUrl}?userId=${userId}`
                            : ""
                    }
                    title="게임 화면"
                    onError={handleIframeError}
                    onLoad={() => {
                        console.log("Iframe has loaded!");
                    }}
                ></iframe>
            )}
            <button onClick={sendDataToIframe}>Send Data to Iframe</button>
        </FrameStyle>
    );
};

export default GameFrame;
