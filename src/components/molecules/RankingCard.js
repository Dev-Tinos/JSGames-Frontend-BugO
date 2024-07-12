import React from "react";
import styled from "styled-components";
import ProfileImg from "../atoms/ProfileImg";

const CardStyled = styled.div`
    box-sizing: border-box;
    margin: auto;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 10px;
    width: 280px;
    height: 448px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    &.my {
        background-color: #ddddff;
        border: 1px solid #ddddff;
    }
    .ranking {
        font-size: 36px;
        font-weight: 700;
        margin: 30px 0 10px;
    }
    .imgbox {
        box-sizing: border-box;
        width: 150px;
        height: 150px;
        flex-shrink: 0;
        margin: 0 0 20px;
    }
    .roundimg {
        width: 100%;
        height: 100%;
    }
    .name {
        font-size: 20px;
        font-weight: 600;
        margin: 0;
    }
    .score {
        font-size: 20px;
        margin: 0;
    }
`;

const RankingCard = ({ item, ranking, styled }) => {
    return (
        <CardStyled className={styled === "my" ? "my" : null}>
            <p className="ranking">{ranking}</p>
            <div className="imgbox">
                <ProfileImg />
            </div>
            <p className="name">{item.user.nickname}</p>
            <p className="score">{item.gameScore}</p>
        </CardStyled>
    );
};

export default RankingCard;
