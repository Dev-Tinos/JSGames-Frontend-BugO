import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// 이메일 인증 코드 전송
export const postEmail = async (params) => {
    const headers = {
        "Content-Type": "application/json",
    };
    const data = await axios
        .post(`${API_URL}/email`, params, {
            headers: headers,
        })
        .then((response) => {
            console.log("인증 코드가 발송되었습니다.");
            return response;
        })
        .catch((error) => {
            alert(error.response.data.message);
            return error;
        });
    return data;
};
