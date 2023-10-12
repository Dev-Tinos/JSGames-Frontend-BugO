import React from "react";
import styled from "styled-components";
import RankingCard from "../molecules/RankingCard";
import RankingCardSkeleton from "../atoms/RankingCardSkeleton";

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

const RankingCardList = ({ myRanking, data, isLoading }) => {
    return (
        <CardListStyled>
            <RankingCard item={myRanking} />
            {isLoading
                ? new Array(3).fill(1).map((_, i) => {
                      return <RankingCardSkeleton key={i} />;
                  })
                : data.map((item) => (
                      <RankingCard key={item.resultId} item={item} />
                  ))}
        </CardListStyled>
    );
};

export default RankingCardList;
