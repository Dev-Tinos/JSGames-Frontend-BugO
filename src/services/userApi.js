import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// 이메일 인증 코드 전송
export const postEmail = async (params) => {
    const headers = {
        "Content-Type": "application/json",
    };
    const data = await axios
        .post(`${API_URL}/api/email`, params, {
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

// 회원가입
export const postUser = async (params) => {
    const headers = {
        "Content-Type": "application/json",
    };
    const data = await axios
        .post(`${API_URL}/api/user`, params, {
            headers: headers,
        })
        .then((response) => {
            alert("회원가입이 완료되었습니다.");
            return response.data;
        })
        .catch((error) => {
            alert(error.response.data.message);
            return error;
        });
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
    return data;
};

// 로그인
export const postLogin = async (params) => {
    const headers = {
        "Content-Type": "application/json",
    };
    const data = await axios
        .post(`${API_URL}/api/user/login`, params, {
            headers: headers,
        })
        .then((response) => {
            localStorage.setItem("userId", response.data.userId);
            return response.data;
        })
        .catch((error) => {
            console.log(error.response.data.message);
            return error;
        });
    return data;
};

// Top100 유저 조회
export const getTop100 = async (params) => {
    const data = await axios
        .get(`${API_URL}/api/users/top100`, { params })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
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
