import React, { useEffect, useRef, useState } from "react";
import GameDetail from "../components/Templat/GameDetail";
import { useParams } from "react-router-dom";
import {
    getReviewList,
    getUserReview,
    postReview,
} from "../services/ReviewApi";
import { getGame } from "../services/GameApi";
import { getUserLog, getUsersLogs } from "../services/LogApi";
const GamePage = () => {
    const params = useParams();
    const [gameData, setGameData] = useState([]);
    const [reviewList, setReviewList] = useState([]);
    const [myReview, setMyReview] = useState(null);
    const [reviewPage, setReviewPage] = useState(1);
    const [reviewSort, setReviewSort] = useState("RECENT");
    const [star, setStar] = useState(null);
    const [rankingList, setRankingList] = useState(null);
    const [rankingPage, setRankingPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [myRanking, setMyRanking] = useState(null);
    const [btnDisable, setBtnDisable] = useState(false);
    const loaderRef = useRef(null);
    const rankingRef = useRef(null);

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
                    size: 5,
                    page: 0,
                });
                const ranking = await getUserLog(
                    params.gameId,
                    localStorage.getItem("userId")
                );
                setRankingList(rankings);
                setRankingPage(1);
                setMyRanking(ranking);
                setIsLoading(false);
            } catch (error) {
                console.error();
            }
        };
        setRankingList(null);
        getData();
    }, [params]);

    useEffect(() => {
        const getData = async () => {
            try {
                const reviews = await getReviewList(params.gameId, {
                    page: 0,
                    size: 5,
                    sort: reviewSort,
                });
                const review = await getUserReview(
                    params.gameId,
                    localStorage.getItem("userId")
                );
                setReviewList(reviews);
                setMyReview(review);
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
            if (star === null) {
                alert("별점을 선택해 주세요");
                return;
            }
            const data = await postReview({
                userId: localStorage.getItem("userId"),
                gameId: gameData.gameId,
                reviewContent: reviewText,
                star: star,
            });
            if (data.status === 200) {
                alert("리뷰 작성 완료");
                try {
                    const reviews = await getReviewList(params.gameId, {
                        page: 0,
                        size: 5,
                        sort: "RECENT",
                    });
                    const review = await getUserReview(
                        params.gameId,
                        localStorage.getItem("userId")
                    );
                    setReviewList(reviews);
                    setMyReview(review);
                    setReviewPage(1);
                } catch (error) {
                    console.error();
                }
            } else {
                alert(data.data.message);
            }
        } catch (error) {
            console.error();
        }
    };

    useEffect(() => {
        const fetchMoreData = async () => {
            try {
                setTimeout(async () => {
                    const newList = await getReviewList(params.gameId, {
                        page: reviewPage,
                        size: 5,
                        sort: reviewSort,
                    });
                    if (newList.length === 0) {
                        return;
                    }
                    setReviewList((prevList) => [...prevList, ...newList]);
                    setReviewPage((prevPage) => prevPage + 1);
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
    }, [loaderRef, reviewPage, params, reviewSort]);

    useEffect(() => {
        const fetchMoreData = async () => {
            try {
                setTimeout(async () => {
                    const newList = await getUsersLogs(params.gameId, {
                        size: 5,
                        page: rankingPage,
                    });
                    if (newList.length === 0) {
                        return;
                    }
                    setRankingList((prevList) => [...prevList, ...newList]);
                    setRankingPage((prevPage) => prevPage + 1);
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
        if (rankingRef.current) {
            observer.observe(rankingRef.current);
        }
        return () => observer.disconnect();
    }, [rankingRef, params, rankingPage]);
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
                reviewSort={reviewSort}
                setReviewSort={setReviewSort}
                star={star}
                setStar={setStar}
                myReview={myReview}
                rankingRef={rankingRef}
            />
        </div>
    );
};

export default GamePage;
