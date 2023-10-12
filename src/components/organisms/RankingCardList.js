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

const RankingCardList = ({
    myRanking,
    data,
    isLoading,
    rankingPage,
    // onClicked,
}) => {
    return (
        <CardListStyled>
            <RankingCard item={myRanking} ranking={myRanking.ranking} />
            {/* <button onClick={onClicked(rankingPage - 1)}>이전</button> */}
            {isLoading
                ? new Array(3).fill(1).map((_, i) => {
                      return <RankingCardSkeleton key={i} />;
                  })
                : data.map((item, i) => (
                      <RankingCard
                          key={item.resultId}
                          item={item}
                          ranking={rankingPage * 3 + i + 1}
                      />
                  ))}
            {/* <button onClick={onClicked(rankingPage + 1)}>다음</button> */}
        </CardListStyled>
    );
};

export default RankingCardList;
