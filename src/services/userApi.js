import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// 이메일 인증 코드 전송
export const postEmail = async (params) => {
    const headers = {
        "Content-Type": "application/json",
    };
    const data = await axios
        .post(
            `${API_URL}/api/email`,
            { params },
            {
                headers: headers,
            }
        )
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
    console.log(data);
    return data;
};

// 회원가입
export const postUser = async (params) => {
    const headers = {
        "Content-Type": "application/json",
    };
    const data = await axios
        .post(
            `${API_URL}/api/user`,
            { params },
            {
                headers: headers,
            }
        )
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    console.log(data);
    return data;
};

// userId로 유저 정보 조회
export const getUser = async (params) => {
    const data = await axios
        .get(`${API_URL}/api/user/${params}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    console.log(data);
    return data;
};

// test
export const apiTest = async () => {
    const response = await fetch(`${API_URL}/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.text();
    return data;
};
