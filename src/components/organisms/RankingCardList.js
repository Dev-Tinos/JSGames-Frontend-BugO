import React from "react";
import styled from "styled-components";
import RankingCard from "../molecules/RankingCard";

const CardListStyled = styled.div`
    margin: auto;
    width: 1280px;
    height: 500px;
    background-color: #d9d9d9;
    display: flex;
    border-radius: 10px;
    .CardStyled {
        background-color: blue;
    }
`;

const RankingCardList = ({ myRanking, data }) => {
    return (
        <CardListStyled>
            <RankingCard item={myRanking} />
            {data.map((item) => (
                <RankingCard key={item.resultId} item={item} />
            ))}
        </CardListStyled>
    );
};

export default RankingCardList;
