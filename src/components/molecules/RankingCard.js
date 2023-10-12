import React from "react";
import styled from "styled-components";

const CardStyled = styled.div`
    margin: auto;
    background-color: #fff;
    border-radius: 15px;
    width: 280px;
    height: 448px;
    text-align: center;
    .ranking {
        font-size: 30px;
        font-weight: bold;
    }
    img {
        width: 150px;
        height: 150px;
        background-color: red;
        border-radius: 50%;
    }
    .name {
        font-size: 20px;
        margin-top: 40px;
    }
    .score {
        font-size: 20px;
    }
`;

const RankingCard = ({ item, ranking }) => {
    return (
        <CardStyled>
            <p className="ranking">{ranking}</p>
            <img
                src={require("../../assets/img/tino.png")}
                alt={`${item.userId}`}
            />
            <p className="name">{item.userId}</p>
            <p className="score">{item.gameScore}</p>
        </CardStyled>
    );
};

export default RankingCard;
