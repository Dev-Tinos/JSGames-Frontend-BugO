import React from "react";
import styled from "styled-components";

const CardStyled = styled.div`
    box-sizing: border-box;
    margin: auto;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #5383e8;
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
        border-radius: 50%;
        box-shadow: 0 0 0 2px #efefef;
    }
    .name {
        font-size: 20px;
        margin-top: 40px;
    }
    .score {
        font-size: 20px;
    }
`;

const RankingCard = ({ item, ranking, styled }) => {
    return (
        <CardStyled
            style={
                styled === "my"
                    ? { boxShadow: "0 0 0 20px #ffffb5 inset" }
                    : null
            }
        >
            <>
                <p className="ranking">{ranking}</p>
                <img
                    src={require("../../assets/img/tino.png")}
                    alt={`${item.userId}`}
                />
                <p className="name">{item.user.nickname}</p>
                <p className="score">{item.gameScore}</p>
            </>
        </CardStyled>
    );
};

export default RankingCard;
