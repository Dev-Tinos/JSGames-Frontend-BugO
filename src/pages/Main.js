import React, { useEffect, useState } from "react";
import MainTemplat from "../components/Templat/MainTemplat";
import { getGameRanking } from "../services/RankingApi";

const Main = () => {
    const [gameList, setGameList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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

    return (
        <div>
            <MainTemplat data={gameList} isLoading={isLoading} />
        </div>
    );
};

export default Main;
