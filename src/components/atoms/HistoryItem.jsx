import React from "react";
import styled from "styled-components";

const HistoryStyle = styled.div`
    width: 90%;
    height: 70px;
    background-color: #fff;
    margin: auto;
    margin-bottom: 10px;
    display: flex;
    box-shadow: 0 0 0 2px inset #ddddff;
    .game {
        width: 30%;
        text-align: center;
    }
    .score {
        width: 70%;
        text-align: center;
    }
`;

const HistoryItem = ({ data }) => {
    return (
        <HistoryStyle>
            <p className="game">{data.gameId}</p>
            <p className="score">{data.gameScore}</p>
        </HistoryStyle>
    );
};

export default HistoryItem;
