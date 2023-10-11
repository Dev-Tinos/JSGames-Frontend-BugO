import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// 게임 목록 페이징으로 조회
export const getGameList = async (params) => {
    const data = await axios
        .get(`${API_URL}/api/games`, { params })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });

    return data;
};
