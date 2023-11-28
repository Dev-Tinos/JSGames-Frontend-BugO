import React from "react";
import styled from "styled-components";
import GameItem from "../molecules/GameItem";
import { Link } from "react-router-dom";
import GameItemSkeleton from "../atoms/GameItemSkeleton";

const GameStyle = styled.div`
    margin: auto;
    width: 1200px;
    height: auto;
    overflow: hidden;
`;

const GameList = ({ data, isLoading }) => {
    return (
        <GameStyle>
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
