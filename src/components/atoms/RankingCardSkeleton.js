import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
    margin: auto;
    background-color: #fff;
    border-radius: 15px;
    width: 280px;
    height: 448px;
    .ranking {
        font-size: 30px;
        font-weight: bold;
        width: 30%;
        height: 40px;
        background-color: #ccc;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
    .skeleton-img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: #ccc;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
    .name {
        font-size: 20px;
        margin-top: 40px;
        width: 70%;
        height: 26px;
        background-color: #ccc;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
    .score {
        font-size: 20px;
        width: 70%;
        height: 26px;
        background-color: #ccc;
        margin-left: auto;
        margin-right: auto;
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
