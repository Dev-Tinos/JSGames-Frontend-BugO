import React, { useEffect, useState } from "react";
import GameDetail from "../components/Templat/GameDetail";
import { getGame } from "../services/gameApi";
import { useParams } from "react-router-dom";
import { getCommentList } from "../services/commentApi";
import { getGameResult, getUserResult } from "../services/resultApi";

const GamePage = () => {
    const params = useParams();
    const [gameData, setGameData] = useState([]);
    const [commentList, setCommentList] = useState([]);
    const [rankingList, setRankingList] = useState(null);
    const [rankingPage, setRankingPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [myRanking, setMyRanking] = useState(null);
    const [btnDisable, setBtnDisable] = useState(false);

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
                const rankings = await getGameResult(params.gameId, {
                    size: 3,
                    page: rankingPage,
                });
                const ranking = await getUserResult(
                    params.gameId,
                    localStorage.getItem("userId")
                );
                setRankingList(rankings);
                setMyRanking(ranking);
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

    const rankingRefresh = async () => {
        setBtnDisable(true);
        try {
            const ranking = await getUserResult(
                params.gameId,
                localStorage.getItem("userId")
            );
            setMyRanking(ranking);
        } catch (error) {
            console.error();
        }
        setBtnDisable(false);
    };

    return (
        <div>
            <GameDetail
                game={gameData}
                comment={commentList}
                ranking={rankingList}
                myRanking={myRanking}
                isLoading={isLoading}
                rankingPage={rankingPage}
                setRankingPage={setRankingPage}
                rankingRefresh={rankingRefresh}
                btnDisable={btnDisable}
            />
        </div>
    );
};

export default GamePage;
