import React, { useEffect, useRef, useState } from "react";
import MainTemplat from "../components/Templat/MainTemplat";
import { getGameRanking } from "../services/RankingApi";

const Main = () => {
    const [gameList, setGameList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const loaderRef = useRef(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const params = { page: 0, size: 12 };
                const apiData = await getGameRanking(params);
                setGameList(apiData);
                setIsLoading(false);
            } catch (error) {
                console.error();
            }
        };

        getData();
    }, []);

    useEffect(() => {
        const fetchMoreData = async () => {
            try {
                const newList = await getGameRanking({ page: page, size: 12 });
                setGameList((prevList) => [...prevList, ...newList]);
                setPage((prevPage) => prevPage + 1);
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
    }, [loaderRef, page]);

    return (
        <div>
            <MainTemplat
                data={gameList}
                isLoading={isLoading}
                loaderRef={loaderRef}
            />
        </div>
    );
};

export default Main;
