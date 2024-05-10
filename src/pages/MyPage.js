import React, { useEffect, useState } from "react";
import MyTemplat from "../components/Templat/MyTemplat";
import { getUser } from "../services/UserApi";
import { getGameUser } from "../services/GameApi";

const MyPage = () => {
    const [user, setUser] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
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
        const userId = localStorage.getItem("userId");
        const getData = async () => {
            try {
                const apiData = await getGameUser(userId, {
                    page: 0,
                    size: 8,
                });
                setHistoryData(apiData);
            } catch (error) {
                console.error();
            }
        };
        getData();
    }, [page, size]);

    return (
        <div>
            <MyTemplat
                user={user}
                historyData={historyData}
                setPage={setPage}
                setSize={setSize}
            />
        </div>
    );
};

export default MyPage;
