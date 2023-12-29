import React, { useEffect, useRef, useState } from "react";
import GameDetail from "../components/Templat/GameDetail";
import { useParams } from "react-router-dom";
import { getReviewList, postReview } from "../services/ReviewApi";
import { getGame } from "../services/GameApi";
import { getUserLog, getUsersLogs } from "../services/LogApi";
const GamePage = () => {
    const params = useParams();
    const [gameData, setGameData] = useState([]);
    const [reviewList, setReviewList] = useState([]);
    const [reviewPage, setReviewPage] = useState(1);
    const [reviewSort, setReviewSort] = useState("RECENT");
    const [star, setStar] = useState(0);
    const [reviewLoading, setReviewLoading] = useState(false);
    const [rankingList, setRankingList] = useState(null);
    const [rankingPage, setRankingPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [myRanking, setMyRanking] = useState(null);
    const [btnDisable, setBtnDisable] = useState(false);
    const loaderRef = useRef(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const game = await getGame(params);
                setGameData(game);
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
                const rankings = await getUsersLogs(params.gameId, {
                    size: 3,
                    page: rankingPage,
                });
                const ranking = await getUserLog(
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
                setReviewList([]);
                const review = await getReviewList(params.gameId, {
                    page: 0,
                    size: 10,
                    sort: reviewSort,
                });
                setReviewList(review);
                setReviewPage(1);
            } catch (error) {
                console.error();
            }
        };

        getData();
    }, [params, reviewSort]);

    const rankingRefresh = async () => {
        setBtnDisable(true);
        try {
            const ranking = await getUserLog(
                params.gameId,
                localStorage.getItem("userId")
            );
            setMyRanking(ranking);
        } catch (error) {
            console.error();
        }
        setBtnDisable(false);
    };

    const reviewsubmit = async (reviewText) => {
        try {
            await postReview({
                userId: localStorage.getItem("userId"),
                gameId: gameData.gameId,
                reviewContent: reviewText,
                star: star,
            });
            alert("리뷰 작성 완료");
            window.location.reload();
        } catch (error) {
            console.error();
        }
    };

    useEffect(() => {
        const fetchMoreData = async () => {
            if (reviewLoading) return;

            setReviewLoading(true);

            try {
                setTimeout(async () => {
                    const newList = await getReviewList(params.gameId, {
                        page: reviewPage,
                        size: 10,
                        sort: reviewSort,
                    });
                    setReviewList((prevList) => [...prevList, ...newList]);
                    setReviewPage((prevPage) => prevPage + 1);
                    setReviewLoading(false);
                }, 100);
            } catch (error) {
                console.error();
            }
        };
        const observer = new IntersectionObserver(
            (entries) => {
                const firstEntry = entries[0];
                if (firstEntry.isIntersecting) {
                    fetchMoreData();
                }
            },
            { threshold: 1.0 }
        );
        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }
        return () => observer.disconnect();
    }, [loaderRef, reviewPage, params, reviewSort, reviewLoading]);

    return (
        <div>
            <GameDetail
                game={gameData}
                review={reviewList}
                ranking={rankingList}
                myRanking={myRanking}
                isLoading={isLoading}
                rankingPage={rankingPage}
                setRankingPage={setRankingPage}
                rankingRefresh={rankingRefresh}
                btnDisable={btnDisable}
                loaderRef={loaderRef}
                reviewsubmit={reviewsubmit}
                setReviewSort={setReviewSort}
                setStar={setStar}
            />
        </div>
    );
};

export default GamePage;
