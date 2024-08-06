import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
    box-sizing: border-box;
    margin: auto;
    background-color: #fff;
    border: 1px solid #efefef;
    border-radius: 10px;
    width: 280px;
    height: 448px;
    flex-shrink: 1;
    .ranking {
        font-size: 30px;
        font-weight: bold;
        width: 20%;
        height: 40px;
        border-radius: 10px;
        background-color: #efefef;
        margin-left: auto;
        margin-right: auto;
    }
    .skeleton-img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: #efefef;
        margin-left: auto;
        margin-right: auto;
    }
    .name {
        font-size: 20px;
        margin-top: 40px;
        width: 30%;
        height: 26px;
        border-radius: 10px;
        background-color: #efefef;
        margin-left: auto;
        margin-right: auto;
    }
    .score {
        font-size: 20px;
        width: 30%;
        height: 26px;
        border-radius: 10px;
        background-color: #efefef;
        margin-left: auto;
        margin-right: auto;
    }
    &.not {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const RankingCardSkeleton = () => {
    return (
        <CardStyle>
            <p className="ranking" />
            <div className="skeleton-img" />
            <p className="name" />
            <p className="score" />
        </CardStyle>
    );
};

export default RankingCardSkeleton;
