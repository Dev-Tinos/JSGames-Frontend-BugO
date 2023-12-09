import React, { useEffect, useState } from "react";
import MyTemplat from "../components/Templat/MyTemplat";
import { getUser } from "../services/UserApi";
import { getGameUser } from "../services/GameApi";

const MyPage = () => {
    const [user, setUser] = useState([]);
    const [type, setType] = useState("ranking");
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [rankingData, setRankingData] = useState(null);
    const [historyData, setHistoryData] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        const getData = async () => {
            try {
                const apiData = await getUser(userId);
                setUser(apiData);
            } catch (error) {
                console.error();
            }
        };
        getData();
    }, []);

    useEffect(() => {
        // const userId = localStorage.getItem("userId");
        const getData = async () => {
            const userId = localStorage.getItem("userId");
            try {
                if (type === "ranking") {
                    const apiData = null;
                    setRankingData(apiData);
                } else if (type === "history") {
                    const apiData = await getGameUser(userId, {
                        page: 0,
                        size: 10,
                    });
                    setHistoryData(apiData);
                }
            } catch (error) {
                console.error();
            }
        };
        getData();
    }, [page, size, type]);

    return (
        <div>
            <MyTemplat
                user={user}
                type={type}
                setType={setType}
                rankingData={rankingData}
                historyData={historyData}
                setPage={setPage}
                setSize={setSize}
            />
        </div>
    );
};

export default MyPage;
