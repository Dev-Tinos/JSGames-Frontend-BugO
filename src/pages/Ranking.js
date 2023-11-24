import React, { useEffect, useState } from "react";
import RankingTemplat from "../components/Templat/RankingTemplat";
import { getGameRanking, getUserTop100 } from "../services/RankingApi";

const Ranking = () => {
    const [userRanking, setUserRanking] = useState(null);
    const [gameRanking, setGameRanking] = useState(null);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [type, setType] = useState(0);

    useEffect(() => {
        const getData = async () => {
            try {
                const params = { page: page, size: size };
                if (type === 0) {
                    const apiData = await getGameRanking(params);
                    setGameRanking(apiData);
                } else if (type === 1) {
                    const apiData = await getUserTop100(params);
                    setUserRanking(apiData);
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
                data={type === 0 ? gameRanking : userRanking}
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
