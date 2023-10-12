import React, { useEffect, useState } from "react";
import GameDetail from "../components/Templat/GameDetail";
import { getGame } from "../services/gameApi";
import { useParams } from "react-router-dom";
import { getCommentList } from "../services/commentApi";
import { getGameResult } from "../services/resultApi";

const GamePage = () => {
    const params = useParams();
    const [gameData, setGameData] = useState([]);
    const [commentList, setCommentList] = useState([]);
    const [rankingList, setRankingList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const game = await getGame(params);
                const comment = await getCommentList(params.gameId, {
                    size: 10,
                    page: 0,
                });
                const ranking = await getGameResult(params.gameId, {
                    size: 3,
                    page: 0,
                });
                setGameData(game);
                setCommentList(comment);
                setRankingList(ranking);
                setIsLoading(false);
            } catch (error) {
                console.error();
            }
        };

        getData();
    }, [params]);

    return (
        <div>
            <GameDetail
                game={gameData}
                comment={commentList}
                ranking={rankingList}
                isLoading={isLoading}
            />
        </div>
    );
};

export default GamePage;
