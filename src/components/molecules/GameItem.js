import React from "react";
import styled from "styled-components";

const GameItemBlock = styled.div`
    background-color: #d9d9d9;
    list-style-type: none;
    width: 380px;
    margin: 10px;
    float: left;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;

    img {
        margin: 0 auto;
        display: block;
        width: 360px;
        height: 220px;
        object-fit: cover;
        background-color: #999;
        border-radius: 10px;
    }
    .title {
        font-size: 18px;
        margin: 10px 0px 10px 10px;
        color: #000;
        font-weight: bold;
    }
    .text {
        font-size: 14px;
        margin: 0px 0px 0px 10px;
    }
`;

const GameItem = ({ item }) => {
    return (
        <GameItemBlock>
            <img className="logo-img" src={item.imageUrl} alt={item.gameName} />
            <p className="title">{item.gameName}</p>
            <p className="text">{item.userId}</p>
        </GameItemBlock>
    );
};

export default GameItem;
