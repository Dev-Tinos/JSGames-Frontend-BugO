import React from "react";
import styled from "styled-components";

const GameItemBlock = styled.div`
    background-color: #fff;
    list-style-type: none;
    width: 380px;
    height: 300px;
    margin: 10px;
    float: left;
    border-radius: 10px;
    box-shadow: 0 0 0 2px #ccc;
    cursor: pointer;

    img {
        margin: 10px auto;
        display: block;
        width: 360px;
        height: 220px;
        object-fit: cover;
        background-color: #ccc;
        border-radius: 10px;
        color: #000;
    }
    .title {
        font-size: 18px;
        margin: 10px 0px 10px 10px;
        color: #000;
        font-weight: bold;
    }
    .text {
        font-size: 14px;
        margin: 0px 0px 10px 10px;
        color: #000;
    }
`;

const GameItem = ({ item }) => {
    return (
        <GameItemBlock>
            <img className="logo-img" src={item.imageUrl} alt={item.gameName} />
            <p className="title">{item.gameName}</p>
            {/* <p className="text">{item.userId}</p> */}
            <p className="text">조회수: {item.viewCount}</p>
        </GameItemBlock>
    );
};

export default GameItem;
