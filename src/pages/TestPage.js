import React, { useEffect, useState } from "react";
import { apiTest } from "../services/UserApi";

const TestPage = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        const apiData = async () => {
            const res = await apiTest();
            return res;
        };

        apiData().then((res) => setData(res));
    }, []);

    return <div>{data}</div>;
};

export default TestPage;
