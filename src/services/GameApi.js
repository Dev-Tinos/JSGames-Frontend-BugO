import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// GameId로 게임 조회
export const getGame = async (params) => {
    const data = await axios
        .get(`${API_URL}/game/${params.gameId}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return data;
};

// 특정 유저의 플레이한 게임 리스트 조회
export const getGameUser = async (userId, params) => {
    const data = await axios
        .get(`${API_URL}/game/user/${userId}`, { params })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return data;
};

// 게임 목록 조회 (페이징)
export const getGameRanking = async (params) => {
    const data = await axios
        .get(`${API_URL}/games`, { params })
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return data;
};
