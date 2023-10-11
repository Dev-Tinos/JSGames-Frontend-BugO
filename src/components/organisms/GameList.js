import React from "react";
import styled from "styled-components";
import GameItem from "../molecules/GameItem";
import { Link } from "react-router-dom";

const GameStyle = styled.ul`
    margin: auto;
    width: 1300px;
`;

const GameList = ({ data }) => {
    const gameList = data;
    return (
        <GameStyle>
            {gameList.map((item) => (
                <Link to={`/game/${item.gameId}`}>
                    <GameItem key={item.gameId} item={item} />
                </Link>
            ))}
        </GameStyle>
    );
};

export default GameList;
