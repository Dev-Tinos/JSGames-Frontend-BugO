import React, { useEffect, useRef, useState } from "react";
import RankingTemplat from "../components/Templat/RankingTemplat";
import {
    getMajorRanking,
    getRankMajor,
    getUserTop100,
} from "../services/RankingApi";
import { getGameRanking } from "../services/GameApi";

const Ranking = () => {
    const [gameRanking, setGameRanking] = useState([]);
    const [gameRankingPage, setGameRanikngPage] = useState(1);
    const [gameSort, setGameSort] = useState("VIEW_COUNT");
    const [userRanking, setUserRanking] = useState([]);
    const [userRankingPage, setUserRankingPage] = useState(0);
    const [majorRanking, setMajorRanking] = useState([]);
    const [majorUserRanking, setMajorUserRanking] = useState([]);
    const [majorUserPage, setMajorUserPage] = useState(0);
    const [major, setMajor] = useState("소프트웨어학과");
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState(0);
    const loaderRef = useRef(null);

    //랭킹 종류나 학과 변경 시 무한스크롤 시작
    useEffect(() => {
        setLoading(false);
    }, [major, type]);

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            try {
                const apiData = await getGameRanking({
                    page: 0,
                    size: 10,
                    sort: gameSort,
                });
                setGameRanking(apiData);
                setGameRanikngPage(1);
                setLoading(false);
            } catch (error) {
                console.error();
            }
        };
        getData();
    }, [gameSort]);

    //학과내랭킹에서 학과변경시 랭킹리스트 초기화 및 변경된 학과페이지 0호출
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
                            sort: gameSort,
                        });
                        //받은 데이터 길이가 0일경우 무한스크롤 중지
                        if (newList.length === 0) {
                            return;
                        }
                        setGameRanking((prevList) => [...prevList, ...newList]);
                        setGameRanikngPage((prevPage) => prevPage + 1);
                        setLoading(false);
                    } else if (type === 1) {
                        const apiData = await getUserTop100({
                            page: userRankingPage,
                            size: 10,
                        });
                        const newList = apiData.rankList;
                        //받은 데이터 길이가 0일경우 무한스크롤 중지
                        if (newList.length === 0) {
                            return;
                        }
                        setUserRanking((prevList) => [...prevList, ...newList]);
                        setUserRankingPage((prevPage) => prevPage + 1);
                        setLoading(false);
                    } else if (type === 2) {
                        const apiData = await getMajorRanking();
                        setMajorRanking(apiData.rankList);
                        // setLoading(false);
                    } else if (type === 3) {
                        const apiData = await getRankMajor({
                            page: majorUserPage,
                            size: 10,
                            major: major,
                        });
                        const newList = apiData.rankList;
                        //받은 데이터 길이가 0일경우 무한스크롤 중지
                        if (newList.length === 0) {
                            return;
                        }
                        setMajorUserRanking((prevList) => [
                            ...prevList,
                            ...newList,
                        ]);
                        setMajorUserPage((prevPage) => prevPage + 1);
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
    }, [
        loaderRef,
        gameRankingPage,
        type,
        userRankingPage,
        loading,
        major,
        majorUserPage,
        gameSort,
    ]);

    return (
        <div>
            <RankingTemplat
                gameRanking={gameRanking}
                gameSort={gameSort}
                setGameSort={setGameSort}
                userRanking={userRanking}
                major={major}
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
