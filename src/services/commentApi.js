import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// 댓글 조회
export const getCommentList = async (gameId, params) => {
    const data = await axios
        .get(`${API_URL}/api/comments/game/${gameId}`, { params })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return data;
};
