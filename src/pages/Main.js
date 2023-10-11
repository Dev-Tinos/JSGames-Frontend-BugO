import React, { useEffect, useState } from "react";
import MainTemplat from "../components/Templat/MainTemplat";
import { getGameList } from "../services/gameApi";

const Main = () => {
    const [gameList, setGameList] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const params = { page: 0, size: 12 };
                const apiData = await getGameList(params);
                setGameList(apiData);
                setIsLoading(false);
            } catch (error) {
                console.error();
            }
        };

        getData();
    }, []);

    if (isLoading) {
        return <div>Loding...</div>;
    }
    return (
        <div>
            <MainTemplat data={gameList} />
        </div>
    );
};

export default Main;
