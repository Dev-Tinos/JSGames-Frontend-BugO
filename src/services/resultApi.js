import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// 특정 게임 유저 랭킹 조회
export const getGameResult = async (gameId, params) => {
    const data = await axios
        .get(`${API_URL}/api/results/game/${gameId}`, { params })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    console.log(data);
    return data;
};

// UserId로 랭킹 조회
export const getUsersResult = async (userId) => {
    const data = await axios
        .get(`${API_URL}/api/results/user/${userId}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    console.log(data);
    return data;
};

// 특정 게임 특정 유저의 최고 점수 조회
export const getUserResult = async (userId, gameId) => {
    const data = await axios
        .get(`${API_URL}/api/result/game/${gameId}/user/${userId}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    console.log(data);
    return data;
};

// Game 랭킹 조회
// export const getGames = async (params) => {
//     const data = await axios
//         .get(`${API_URL}/api/games/`, { params })
//         .then((response) => {
//             return response.data;
//         })
//         .catch((error) => {
//             return error;
//         });
//     return data;
// };
