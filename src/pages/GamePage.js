import React from "react";
import { useParams } from "react-router-dom";

const GamePage = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>게임 페이지</h1>
            <p>ID: {id}</p>
        </div>
    );
};

export default GamePage;
