import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// helpful 추가 api
export const postHelpful = async ({ userId, reviewId }) => {
    const headers = {
        "Content-Type": "application/json",
    };
    const data = await axios
        .post(`${API_URL}/helpful/user/${userId}/review/${reviewId}`, {
            headers: headers,
        })
        .then((response) => {
            alert("인증 코드가 발송되었습니다.");
            return response;
        })
        .catch((error) => {
            alert(error.response.data.message);
            return error;
        });
    return data;
};

// helpful 여부 조회
export const getHelpful = async (params) => {
    const data = await axios
        .get(`${API_URL}/helpful/user/{userId}/review/{reviewId}`, { params })
        .then((response) => {
            console.log(params);
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            alert(error.response.data.message);
            return error;
        });
    return data;
};

// helpful 삭제
export const deleteHelpful = async ({ userId, reviewId }) => {
    const headers = {
        "Content-Type": "application/json",
    };
    const data = await axios
        .delete(`${API_URL}/helpful/user/${userId}/review/${reviewId}/delete`, {
            headers: headers,
        })
        .then((response) => {
            alert("인증 코드가 발송되었습니다.");
            return response;
        })
        .catch((error) => {
            alert(error.response.data.message);
            return error;
        });
    return data;
};
