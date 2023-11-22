import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// Top100 유저 랭킹 조회
export const getUserTop100 = async (params) => {
    const data = await axios
        .get(`${API_URL}/rank/users`, { params })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return data;
};

// 게임 랭킹 조회 (페이징)
export const getGameRanking = async (params) => {
    const data = await axios
        .get(`${API_URL}/games`, { params })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return data;
};
