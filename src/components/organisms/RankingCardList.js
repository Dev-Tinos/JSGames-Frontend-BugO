import React from "react";
import styled from "styled-components";
import RankingCard from "../molecules/RankingCard";
import RankingCardSkeleton from "../atoms/RankingCardSkeleton";

const CardListStyled = styled.div`
    box-sizing: border-box;
    margin: auto;
    width: 1280px;
    height: 500px;
    background-color: #ffffff;
    border: 1px solid #ddddff;
    border-radius: 10px;
    display: flex;
    button {
        width: 26px;
        background-color: #4249e5;
        border: 0px;
        color: #fff;
        cursor: pointer;
    }
    .disabledButton {
        background-color: #eee;
        color: #000;
    }
    .my {
        .CardStyled {
            background-color: red;
        }
    }
`;

const RankingCardList = ({ myRanking, data, rankingPage, setRankingPage }) => {
    return (
        <CardListStyled>
            {myRanking === null ? (
                <RankingCardSkeleton type={myRanking} />
            ) : (
                <RankingCard
                    item={myRanking}
                    ranking={myRanking.ranking}
                    styled={"my"}
                />
            )}
            <button
                disabled={rankingPage === 0 ? true : false}
                className={rankingPage === 0 ? "disabledButton" : null}
                onClick={() => {
                    setRankingPage(rankingPage - 1);
                }}
            >
                <i class="fa-solid fa-caret-left fa-2x"></i>
            </button>
            {data === null
                ? new Array(3).fill(1).map((_, i) => {
                      return <RankingCardSkeleton key={i} />;
                  })
                : data.map((item, i) => (
                      <RankingCard
                          key={item.logId}
                          item={item}
                          ranking={rankingPage * 3 + i + 1}
                      />
                  ))}
            <button
                onClick={() => {
                    setRankingPage(rankingPage + 1);
                }}
            >
                <i class="fa-solid fa-caret-right fa-2x"></i>
            </button>
        </CardListStyled>
    );
};

export default RankingCardList;
