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
    }
`;

const GameFrame = ({ gameUrl }) => {
    return (
        <FrameStyle>
            <iframe src={gameUrl} />
        </FrameStyle>
    );
};

export default GameFrame;
