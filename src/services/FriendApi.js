import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// 친구 추가 요청
export const postRequestFriend = async (params) => {
    const headers = {
        "Content-Type": "application/json",
    };
    const data = await axios
        .post(`${API_URL}/friend/requests/`, params, {
            headers: headers,
        })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            alert(error.response.data.message);
            return error;
        });
    return data;
};

// 친구 추가 보낸 요청 삭제
export const deleteRequestFriend = async (params) => {
    const data = await axios
        .delete(`${API_URL}/friend/requests/`, params)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
    return data;
};

// 친구 추가 거절
export const postRejectFriend = async (params) => {
    const headers = {
        "Content-Type": "application/json",
    };
    const data = await axios
        .post(`${API_URL}/friend/reject/`, params, {
            headers: headers,
        })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            alert(error.response.data.message);
            return error;
        });
    return data;
};

// 친구 추가 수락
export const postAcceptFriend = async (params) => {
    const headers = {
        "Content-Type": "application/json",
    };
    const data = await axios
        .post(`${API_URL}/friend/accept/`, params, {
            headers: headers,
        })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            alert(error.response.data.message);
            return error;
        });
    return data;
};

// 친구 목록
export const getFriend = async (userId, params) => {
    const data = await axios
        .get(`${API_URL}/friend/${userId}`, { params })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return data;
};

// 친구 추가 요청보낸 목록
export const getRequestFriend = async (userId, params) => {
    const data = await axios
        .get(`${API_URL}/friend/requests/${userId}`, { params })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return data;
};

// 친구 추가 요청받은 목록
export const getRequestedFriend = async (userId, params) => {
    const data = await axios
        .get(`${API_URL}/friend/requested/${userId}`, { params })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return data;
};

// 친구 삭제
export const deleteFriend = async (params) => {
    const data = await axios
        .delete(`${API_URL}/friend`, params)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
    return data;
};
