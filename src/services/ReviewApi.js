import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// 리뷰 조회
export const getReviewList = async (gameId, params) => {
    const data = await axios
        .get(`${API_URL}/review/game/${gameId}`, { params })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return data;
};

export const postReview = async (params) => {
    const headers = {
        "Content-Type": "application/json",
    };
    const data = await axios
        .post(`${API_URL}/review`, params, {
            headers: headers,
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return data;
};
