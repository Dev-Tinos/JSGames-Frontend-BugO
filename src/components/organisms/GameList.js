import React from "react";
import styled from "styled-components";
import GameItem from "../molecules/GameItem";

const GameListBlock = styled.ul`
    margin: auto;
    width: 1300px;
`;

const GameList = ({ data }) => {
    const gameList = data;
    return (
        <GameListBlock>
            {gameList.map((item) => (
                <GameItem key={item.id} item={item} />
            ))}
        </GameListBlock>
    );
};

export default GameList;
