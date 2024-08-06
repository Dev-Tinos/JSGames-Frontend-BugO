import axios from "axios";

const API_URL = process.env.REACT_APP_AD_URL;

export const getAd = async () => {
    const data = await axios
        .get(`${API_URL}`)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            return error.response;
        });
    return data;
};
