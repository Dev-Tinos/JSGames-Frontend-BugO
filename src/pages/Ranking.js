import React, { useEffect, useRef, useState } from "react";
import RankingTemplat from "../components/Templat/RankingTemplat";
import {
    getGameRanking,
    getMajorRanking,
    getRankMajor,
    getUserTop100,
} from "../services/RankingApi";

const Ranking = () => {
    const [gameRanking, setGameRanking] = useState([]);
    const [userRanking, setUserRanking] = useState([]);
    const [gameRankingPage, setGameRanikngPage] = useState(0);
    const [userRankingPage, setUserRankingPage] = useState(0);
    const [majorRanking, setMajorRanking] = useState([]);
    const [majorUserRanking, setMajorUserRanking] = useState([]);
    const [majorUserPage, setMajorUserPage] = useState(0);
    const [major, setMajor] = useState("소프트웨어학과");
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState(0);
    const loaderRef = useRef(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const apiData = await getRankMajor({
                    page: 0,
                    size: 10,
                    major: major,
                });
                setMajorUserRanking(apiData.rankList);
                setMajorUserPage(1);
                setLoading(false);
            } catch (error) {
                console.error();
            }
        };

        getData();
    }, [major]);

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
                        setLoading(false);
                    } else if (type === 1) {
                        const apiData = await getUserTop100({
                            page: userRankingPage,
                            size: 10,
                        });
                        const newList = apiData.rankList;
                        setUserRanking((prevList) => [...prevList, ...newList]);
                        setUserRankingPage((prevPage) => prevPage + 1);
                        setLoading(false);
                    } else if (type === 2) {
                        const apiData = await getMajorRanking();
                        setMajorRanking(apiData.rankList);
                        setLoading(false);
                    } else if (type === 3) {
                        const apiData = await getRankMajor({
                            page: majorUserPage,
                            size: 10,
                            major: major,
                        });
                        const newList = apiData.rankList;
                        setMajorUserRanking((prevList) => [
                            ...prevList,
                            ...newList,
                        ]);
                        setMajorUserPage((prevPage) => prevPage + 1);
                        setLoading(false);
                        console.log(newList.length);
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
    }, [
        loaderRef,
        gameRankingPage,
        type,
        userRankingPage,
        loading,
        major,
        majorUserPage,
    ]);

    return (
        <div>
            <RankingTemplat
                gameRanking={gameRanking}
                userRanking={userRanking}
                majorRanking={majorRanking}
                majorUserRanking={majorUserRanking}
                setMajor={setMajor}
                type={type}
                setType={setType}
                loaderRef={loaderRef}
            />
        </div>
    );
};

export default Ranking;
