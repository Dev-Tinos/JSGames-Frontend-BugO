import React from "react";
import styled from "styled-components";

const GameItemBlock = styled.div`
    box-sizing: border-box;
    background-color: #fff;
    list-style-type: none;
    width: 380px;
    height: 350px;
    display: inline-block;
    border-radius: 10px;
    padding: 10px;
    border: 2px solid #ddddff;
    cursor: pointer;
    text-align: left;
    position: relative;
    overflow: hidden;
    img {
        display: block;
        width: 360px;
        height: 260px;
        object-fit: cover;
        background-color: #dfdfdf;
        border-radius: 10px;
        color: #000;
        transition: all 0.2s linear;
        position: relative;
        &:hover {
            width: 360px;
            height: 330px;
            top: 0;
        }
    }
    .title {
        font-size: 18px;
        color: #000;
        font-weight: bold;
        margin: 10px 0;
    }
    .text {
        font-size: 14px;
        color: #000;
    }
    &:hover {
        box-shadow: 0px 5px 10px 5px rgb(77, 71, 71, 0.2);
    }
`;

const GameItem = ({ item }) => {
    return (
        <GameItemBlock>
            <img
                className="logo-img"
                src={item.gameImage || require("../../assets/img/tino.png")}
                alt={item.gameName}
            />
            <div>
                <p className="title">{item.gameName}</p>
                <p className="text">조회수: {item.viewCount}</p>
            </div>
        </GameItemBlock>
    );
};

export default GameItem;
