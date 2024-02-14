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

// 리뷰 작성
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

// 리뷰 수정
export const putReview = async (reviewId, params) => {
    const headers = {
        "Content-Type": "application/json",
    };
    const data = await axios
        .put(`${API_URL}/review/${reviewId}`, params, {
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

// 본인이 작성한 리뷰 조회
export const getUserReview = async (gameId, userId) => {
    const data = await axios
        .get(`${API_URL}/review/game/${gameId}/user/${userId}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return null;
        });
    return data;
};
