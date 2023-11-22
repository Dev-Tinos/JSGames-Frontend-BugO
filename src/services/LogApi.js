import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// 특정 게임 유저 랭킹 조회
export const getUsersLogs = async (gameId, params) => {
    const data = await axios
        .get(`${API_URL}/logs/game/${gameId}`, { params })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return data;
};

// 특정 게임 특정 유저의 최고 점수 조회
export const getUserLog = async (gameId, userId) => {
    const data = await axios
        .get(`${API_URL}/log/game/${gameId}/user/${userId}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return null;
        });
    return data;
};

// UserId로 랭킹 조회???
export const getUserResults = async (userId, params) => {
    const data = await axios
        .get(`${API_URL}/api/results/user/${userId}`, { params })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return data;
};
