import React, { useEffect, useRef, useState } from "react";
import RankingTemplat from "../components/Templat/RankingTemplat";
import { getGameRanking, getUserTop100 } from "../services/RankingApi";

const Ranking = () => {
    const [gameRanking, setGameRanking] = useState([]);
    const [userRanking, setUserRanking] = useState([]);
    const [gameRankingPage, setGameRanikngPage] = useState(1);
    const [userRankingPage, setUserRankingPage] = useState(1);
    const [type, setType] = useState(0);
    const loaderRef = useRef(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const params = { page: 0, size: 10 };
                const gameData = await getGameRanking(params);
                setGameRanking(gameData);
                const userData = await getUserTop100(params);
                setUserRanking(userData.rankList);
            } catch (error) {
                console.error();
            }
        };
        getData();
    }, [type]);
    useEffect(() => {
        const fetchMoreData = async () => {
            try {
                if (type === 0) {
                    const newList = await getGameRanking({
                        page: gameRankingPage,
                        size: 10,
                    });
                    setGameRanking((prevList) => [...prevList, ...newList]);
                    setGameRanikngPage((prevPage) => prevPage + 1);
                } else if (type === 1) {
                    const apiData = await getUserTop100({
                        page: userRankingPage,
                        size: 10,
                    });
                    const newList = apiData.rankList;
                    setUserRanking((prevList) => [...prevList, ...newList]);
                    setUserRankingPage((prevPage) => prevPage + 1);
                }
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
    }, [loaderRef, gameRankingPage, type, userRankingPage]);
    return (
        <div>
            <RankingTemplat
                data={type === 0 ? gameRanking : userRanking}
                type={type}
                setType={setType}
                loaderRef={loaderRef}
            />
        </div>
    );
};

export default Ranking;
