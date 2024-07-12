import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import RankingCard from "../molecules/RankingCard";
import RankingCardSkeleton from "../atoms/RankingCardSkeleton";

const CardListStyled = styled.div`
    box-sizing: border-box;
    margin: auto;
    width: 1280px;
    height: 520px;
    background-color: #ffffff;
    border: 1px solid #ddddff;
    border-radius: 10px;
    display: flex;
    gap: 20px;
    padding: 20px;
    button {
        width: 26px;
        background-color: #4249e5;
        border: 0px;
        color: #fff;
        cursor: pointer;
    }
    .mycard {
        display: flex;
        align-items: center;
        padding: 0 20px 10px 0;
        border-right: 1px solid #ddddff;
    }
    .cards {
        display: flex;
        overflow: scroll;
        gap: 20px;
        overflow-y: hidden;
        &::-webkit-scrollbar {
            height: 10px;
            margin-top: 10px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #efefef;
            border-radius: 50px;
        }
        .footer {
            width: 30px;
            flex-shrink: 0;
        }
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

const RankingCardList = ({
    myRanking,
    data,
    rankingPage,
    setRankingPage,
    rankingRef,
}) => {
    const useHorizontalScroll = () => {
        const elRef = useRef();
        useEffect(() => {
            const el = elRef.current;
            if (el) {
                const onWheel = (e) => {
                    if (e.deltaY === 0) return;
                    e.preventDefault();
                    el.scrollTo({
                        left: el.scrollLeft + e.deltaY,
                        behavior: "smooth",
                    });
                };
                el.addEventListener("wheel", onWheel);
                return () => el.removeEventListener("wheel", onWheel);
            }
        }, []);
        return elRef;
    };

    return (
        <CardListStyled>
            <div className="mycard">
                {myRanking === null ? (
                    <RankingCardSkeleton type={myRanking} />
                ) : (
                    <RankingCard
                        item={myRanking}
                        ranking={myRanking.ranking}
                        styled={"my"}
                    />
                )}
            </div>
            {/* <button
                disabled={rankingPage === 0 ? true : false}
                className={rankingPage === 0 ? "disabledButton" : null}
                onClick={() => {
                    setRankingPage(rankingPage - 1);
                }}
            >
                <i class="fa-solid fa-caret-left fa-2x"></i>
            </button> */}
            <div className="cards" ref={useHorizontalScroll()}>
                {data === null
                    ? new Array(3).fill(1).map((_, i) => {
                          return <RankingCardSkeleton key={i} />;
                      })
                    : data.map((item, i) => (
                          <RankingCard
                              key={item.logId}
                              item={item}
                              ranking={i + 1}
                          />
                      ))}
                <div ref={rankingRef}></div>
                <div className="footer"></div>
            </div>
            {/* <button
                onClick={() => {
                    setRankingPage(rankingPage + 1);
                }}
            >
                <i class="fa-solid fa-caret-right fa-2x"></i>
            </button> */}
        </CardListStyled>
    );
};

export default RankingCardList;
