import React, { useEffect, useState } from "react";
import RankingTemplat from "../components/Templat/RankingTemplat";
import { getGames } from "../services/gameApi";

const Ranking = () => {
    const [ranking, setRanking] = useState(null);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    useEffect(() => {
        const getData = async () => {
            try {
                const params = { page: page, size: size };
                const apiData = await getGames(params);
                setRanking(apiData);
                console.log(apiData);
            } catch (error) {
                console.error();
            }
        };
        getData();
    }, [page, size]);

    return (
        <div>
            <RankingTemplat
                data={ranking}
                page={page}
                size={size}
                setPage={setPage}
                setSize={setSize}
            />
        </div>
    );
};

export default Ranking;
