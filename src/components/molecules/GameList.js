import React from "react";
import styled from "styled-components";
import GameItem from "../atoms/GameItem";

const GameListBlock = styled.ul``;

const GameList = ({ data }) => {
    const gameList = data;
    return (
        <GameListBlock>
            {gameList.map((item) => (
                <div>
                    <GameItem key={item.id} item={item} />
                </div>
            ))}
        </GameListBlock>
    );
};

export default GameList;
