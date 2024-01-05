import React from "react";
import styled from "styled-components";
import GameItem from "../molecules/GameItem";
import { Link } from "react-router-dom";
import GameItemSkeleton from "../atoms/GameItemSkeleton";
import SortSelect from "../atoms/SortSelect";

const GameStyle = styled.div`
    margin: auto;
    width: 1200px;
    height: auto;
    overflow: hidden;
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
`;

const GameList = ({ data, isLoading, setGameSort }) => {
    const SORT = [
        { value: "VIEW_COUNT", name: "조회 수 높은 순" },
        { value: "LOG_COUNT", name: "로그 많은 순" },
        { value: "RECENT", name: "최신순" },
        { value: "REVIEW_COUNT", name: "리뷰 많은 순" },
    ];
    return (
        <GameStyle>
            <div className="sortbox">
                <SortSelect item={SORT} setSort={setGameSort} />
            </div>
            {isLoading
                ? new Array(12).fill(1).map((_, i) => {
                      return <GameItemSkeleton key={i} />;
                  })
                : data.map((item) => (
                      <Link to={`/game/${item.gameId}`}>
                          <GameItem key={item.gameId} item={item} />
                      </Link>
                  ))}
        </GameStyle>
    );
};

export default GameList;
