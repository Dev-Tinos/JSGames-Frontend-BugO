import React, { useEffect, useRef, useState } from "react";
import MainTemplat from "../components/Templat/MainTemplat";
import { getGameRanking } from "../services/GameApi";

const Main = () => {
    const [gameList, setGameList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [gameSort, setGameSort] = useState("VIEW_COUNT");
    const [page, setPage] = useState(1);
    const loaderRef = useRef(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const params = { page: 0, size: 10, sort: gameSort };
                const apiData = await getGameRanking(params);
                setGameList(apiData);
                setIsLoading(false);
                setPage(1);
            } catch (error) {
                console.error();
            }
        };

        getData();
    }, [gameSort]);

    useEffect(() => {
        const fetchMoreData = async () => {
            try {
                setTimeout(async () => {
                    const newList = await getGameRanking({
                        page: page,
                        size: 10,
                        sort: gameSort,
                    });
                    if (newList.length === 0) {
                        return;
                    }
                    setGameList((prevList) => [...prevList, ...newList]);
                    setPage((prevPage) => prevPage + 1);
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
    }, [loaderRef, page, gameSort]);

    return (
        <div>
            <MainTemplat
                data={gameList}
                isLoading={isLoading}
                loaderRef={loaderRef}
                gameSort={gameSort}
                setGameSort={setGameSort}
            />
        </div>
    );
};

export default Main;
