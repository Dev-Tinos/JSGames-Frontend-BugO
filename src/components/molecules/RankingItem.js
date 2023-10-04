import React from "react";
import styled from "styled-components";

const RankingItemStyle = styled.div`
    align-items: center;
    background-color: #fff;
    width: 90%;
    margin: auto;
    display: flex;
    margin-top: 5px;
    border: 2px solid #ccc;
    border-radius: 5px;
    padding-right: 20px;
    padding-left: 20px;
    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 10px;
        background-color: red;
    }
    .ranking {
        font-size: 24px;
        font-weight: bold;
        margin-right: 15px;
    }
    .name {
        margin-right: 50px;
    }
    .score {
    }
`;

const RankingItem = ({ item }) => {
    return (
        <RankingItemStyle>
            <p className="ranking">{item.resultId}</p>
            <img
                src={require("../../assets/img/tino.png")}
                alt={`${item.userId}`}
            />
            <p className="name">{item.userId}</p>
            <p className="score">{item.gameScore}</p>
        </RankingItemStyle>
    );
};

export default RankingItem;
