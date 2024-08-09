import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// helpful 추가 api
export const postHelpful = async (params) => {
    const data = await axios
        .post(
            `${API_URL}/helpful/user/${params.userId}/review/${params.reviewId}`
        )
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
    return data;
};

// helpful 여부 조회
export const getHelpful = async (params) => {
    const data = await axios
        .get(
            `${API_URL}/helpful/user/${params.userId}/review/${params.reviewId}`
        )
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return data;
};

// helpful 삭제
export const deleteHelpful = async (params) => {
    const data = await axios
        .delete(
            `${API_URL}/helpful/user/${params.userId}/review/${params.reviewId}`
        )
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
    return data;
};
