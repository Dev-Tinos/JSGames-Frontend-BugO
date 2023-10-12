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
    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: red;
    }
    .ranking {
        font-size: 24px;
        font-weight: bold;
        width: 8%;
        text-align: center;
    }
    .imgbox {
        width: 10%;
    }
    .name {
        width: 50%;
    }
    .score {
        text-align: center;
        width: 25%;
    }
`;

const RankingItem = ({ item }) => {
    return (
        <RankingItemStyle>
            <p className="ranking">{item.resultId}</p>
            <div className="imgbox">
                <img
                    src={require("../../assets/img/tino.png")}
                    alt={`${item.userId}`}
                />
            </div>
            <p className="name">{item.userId}</p>
            <p className="score">{item.gameScore}</p>
        </RankingItemStyle>
    );
};

export default RankingItem;
