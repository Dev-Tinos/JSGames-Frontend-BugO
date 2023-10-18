import React, { useEffect, useState } from "react";
import MyTemplat from "../components/Templat/MyTemplat";
import { getUser } from "../services/userApi";
import { getUserResults } from "../services/resultApi";

const MyPage = () => {
    const [user, setUser] = useState([]);
    const [type, setType] = useState("ranking");
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [rankingData, setRankingData] = useState(null);
    const [historyData, setHistoryData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const apiData = await getUser(1);
                setUser(apiData);
            } catch (error) {
                console.error();
            }
        };
        getData();
    }, []);

    useEffect(() => {
        const getData = async () => {
            try {
                if (type === "ranking") {
                    const apiData = await getUserResults(1, {
                        page: page,
                        size: size,
                    });
                    setRankingData(apiData);
                    setHistoryData(null);
                } else if (type === "history") {
                    setHistoryData("유저 게임 기록");
                    setRankingData(null);
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
