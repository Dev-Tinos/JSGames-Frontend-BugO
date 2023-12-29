import React, { useEffect, useRef, useState } from "react";
import RankingTemplat from "../components/Templat/RankingTemplat";
import { getGameRanking, getUserTop100 } from "../services/RankingApi";

const Ranking = () => {
    const [gameRanking, setGameRanking] = useState([]);
    const [userRanking, setUserRanking] = useState([]);
    const [gameRankingPage, setGameRanikngPage] = useState(0);
    const [userRankingPage, setUserRankingPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState(0);
    const loaderRef = useRef(null);

    useEffect(() => {
        const fetchMoreData = async () => {
            if (loading) return;

            setLoading(true);

            try {
                setTimeout(async () => {
                    if (type === 0) {
                        const newList = await getGameRanking({
                            page: gameRankingPage,
                            size: 10,
                        });
                        setGameRanking((prevList) => [...prevList, ...newList]);
                        setGameRanikngPage((prevPage) => prevPage + 1);
                        setUserRankingPage(0);
                        setLoading(false);
                    } else if (type === 1) {
                        const apiData = await getUserTop100({
                            page: userRankingPage,
                            size: 10,
                        });
                        const newList = apiData.rankList;
                        setUserRanking((prevList) => [...prevList, ...newList]);
                        setUserRankingPage((prevPage) => prevPage + 1);
                        setGameRanikngPage(0);
                        setLoading(false);
                    }
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
    }, [loaderRef, gameRankingPage, type, userRankingPage, loading]);

    return (
        <div>
            <RankingTemplat
                gameRanking={gameRanking}
                userRanking={userRanking}
                type={type}
                setType={setType}
                loaderRef={loaderRef}
            />
        </div>
    );
};

export default Ranking;
