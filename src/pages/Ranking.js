import React, { useEffect, useState } from "react";
import RankingTemplat from "../components/Templat/RankingTemplat";
import { getGameList } from "../services/gameApi";
import { getTop100 } from "../services/userApi";

const Ranking = () => {
    const [ranking, setRanking] = useState(null);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [type, setType] = useState(0);

    useEffect(() => {
        const getData = async () => {
            try {
                const params = { page: page, size: size };
                if (type === 0) {
                    const apiData = await getGameList(params);
                    setRanking(apiData);
                } else if (type === 1) {
                    const apiData = await getTop100(params);
                    setRanking(apiData);
                }
            } catch (error) {
                console.error();
            }
        };
        getData();
    }, [page, size, type]);

    return (
        <div>
            <RankingTemplat
                data={ranking}
                page={page}
                size={size}
                setPage={setPage}
                setSize={setSize}
                type={type}
                setType={setType}
            />
        </div>
    );
};

export default Ranking;
