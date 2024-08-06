import React from "react";
import styled from "styled-components";
import GameItem from "../molecules/GameItem";
import { Link } from "react-router-dom";
import GameItemSkeleton from "../atoms/GameItemSkeleton";
import SortSelect from "../atoms/SortSelect";
import AdBlock from "../atoms/AdBlock";

const GameStyle = styled.div`
    @media (max-width: 1200px) {
        width: 780px;
    }
    @media (min-width: 1200px) {
        width: 1180px;
    }
    @media (min-width: 1600px) {
        width: 1580px;
    }
    @media (min-width: 2000px) {
        width: 1980px;
    }
    @media (min-width: 2400px) {
        width: 2380px;
    }
    margin: auto;
    height: auto;
    overflow: hidden;
    gap: 20px;
    .sortbox {
        text-align: right;
        select {
            margin: 10px 10px 0px;
            width: 150px;
            padding: 10px;
            box-shadow: 0px 0px 0px 2px inset #ddddff;
            outline: none;
        }
    }
    .gameList {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        a {
            width: auto;
            height: auto;
            &:active {
                color: #000000;
            }
        }
    }
`;

const GameList = ({ data, isLoading, gameSort, setGameSort }) => {
    const SORT = [
        { value: "VIEW_COUNT", name: "조회순" },
        { value: "LOG_COUNT", name: "인기순" },
        { value: "RECENT", name: "최신순" },
        { value: "REVIEW_COUNT", name: "댓글순" },
    ];
    return (
        <GameStyle>
            <div className="sortbox">
                <SortSelect item={SORT} setSort={setGameSort} sort={gameSort} />
            </div>
            <div className="gameList">
                {isLoading
                    ? new Array(15).fill(1).map((_, i) => {
                          return <GameItemSkeleton key={i} />;
                      })
                    : data.map((item, i) =>
                          (i + 1) % 5 === 0 ? (
                              <>
                                  <Link to={`/game/${item.gameId}`}>
                                      <GameItem key={item.gameId} item={item} />
                                  </Link>
                                  <AdBlock />
                              </>
                          ) : (
                              <Link to={`/game/${item.gameId}`}>
                                  <GameItem key={item.gameId} item={item} />
                              </Link>
                          )
                      )}
            </div>
        </GameStyle>
    );
};

export default GameList;
