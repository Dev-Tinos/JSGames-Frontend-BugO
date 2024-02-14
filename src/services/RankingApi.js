import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// Top100 유저 랭킹 조회
export const getUserTop100 = async (params) => {
    const data = await axios
        .get(`${API_URL}/rank/users`, { params })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return data;
};

// 학과별 랭킹 조회
export const getMajorRanking = async () => {
    const data = await axios
        .get(`${API_URL}/major`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return data;
};

// 학과내 랭킹 조회
export const getRankMajor = async (params) => {
    const data = await axios
        .get(`${API_URL}/rank/major`, { params })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return data;
};
