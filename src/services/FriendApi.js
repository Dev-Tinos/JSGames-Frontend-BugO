import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// GameId로 게임 조회
export const getFriend = async (params) => {
    const data = await axios
        .get(`${API_URL}/friend`, { params })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    return data;
};
