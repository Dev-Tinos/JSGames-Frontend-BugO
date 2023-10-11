import React, { useEffect, useState } from "react";
import GameDetail from "../components/Templat/GameDetail";
import { getGame } from "../services/gameApi";
import { useParams } from "react-router-dom";

const GamePage = () => {
    const params = useParams();
    const [gameData, setGameData] = useState({});
    const [commentList, setCommentList] = useState({});

    useEffect(() => {
        const getData = async () => {
            try {
                const game = await getGame(params);
                setGameData(game);
            } catch (error) {
                console.error();
            }
        };

        getData();
    }, []);

    return (
        <div>
            <GameDetail data={gameData} />
        </div>
    );
};

export default GamePage;
