import React from "react";
import styled from "styled-components";

const FrameStyle = styled.div`
    width: 1280px;
    height: 800px;
    background-color: #d9d9d9;
    margin: auto;
    iframe {
        width: 1280px;
        height: 800px;
        border-width: 0px;
    }
`;

const GameFrame = ({ gameUrl }) => {
    return (
        <FrameStyle>
            <iframe src={gameUrl} title="게임 화면" />
        </FrameStyle>
    );
};

export default GameFrame;
