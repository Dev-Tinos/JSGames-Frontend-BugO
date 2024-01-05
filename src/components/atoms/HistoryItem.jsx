import React from "react";
import styled from "styled-components";

const HistoryStyle = styled.div`
    width: 310px;
    height: auto;
    background-color: #fff;
    margin: 5px;
    box-shadow: 0 0 0 2px inset #ddddff;
    list-style-type: none;
    float: left;
    .logo-img {
        margin: 10px auto;
        display: block;
        width: 280px;
        height: 250px;
        text-align: center;
    }
    .game {
        text-align: center;
        color: #000;
        font-weight: bold;
        font-size: 18px;
        margin: 0px 0px 12px;
    }
`;

const HistoryItem = ({ data }) => {
    return (
        <HistoryStyle>
            <img
                className="logo-img"
                src={data.gameImage || require("../../assets/img/tino.png")}
                alt={data.gameName}
            />
            <p className="game">{data.gameName}</p>
        </HistoryStyle>
    );
};

export default HistoryItem;
