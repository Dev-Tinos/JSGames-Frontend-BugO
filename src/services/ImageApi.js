import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// helpful 추가 api
export const postImage = async (params) => {
    console.log(params);
    const data = await axios
        .post(`${API_URL}/Image`, params, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => {
            return response.data.imageUrl;
        })
        .catch((error) => {
            return error;
        });
    return data;
};
