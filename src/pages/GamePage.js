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
    const [rankingPage, setRankingPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const game = await getGame(params);
                const comment = await getCommentList(params.gameId, {
                    size: 10,
                    page: 0,
                });
                setGameData(game);
                setCommentList(comment);
                setIsLoading(false);
            } catch (error) {
                console.error();
            }
        };

        getData();
    }, [params]);

    useEffect(() => {
        const getData = async () => {
            try {
                const ranking = await getGameResult(params.gameId, {
                    size: 3,
                    page: rankingPage,
                });
                setRankingList(ranking);
                setIsLoading(false);
            } catch (error) {
                console.error();
            }
        };
        setRankingList(null);
        getData();
    }, [params, rankingPage]);

    useEffect(() => {
        const getData = async () => {
            try {
                const comment = await getCommentList(params.gameId, {
                    size: 10,
                    page: 0,
                });
                setCommentList(comment);
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
                rankingPage={rankingPage}
                setRankingPage={setRankingPage}
            />
        </div>
    );
};

export default GamePage;
