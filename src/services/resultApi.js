import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// 댓글 조회
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
