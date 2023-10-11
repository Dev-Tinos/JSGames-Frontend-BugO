import React, { useEffect, useState } from "react";
import MainTemplat from "../components/Templat/MainTemplat";
import { getGameList } from "../services/gameApi";

const Main = () => {
    const [gameList, setGameList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const params = { page: 0, size: 12 };
                const apiData = await getGameList(params);
                setGameList(apiData);
            } catch (error) {
                console.error();
            }
        };

        getData();
    }, []);

    return (
        <div>
            <MainTemplat data={gameList} />
        </div>
    );
};

export default Main;
