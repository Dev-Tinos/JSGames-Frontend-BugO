const API_URL = process.env.REACT_APP_API_URL;

// 회원가입
export const postUser = async (params) => {
    const response = await fetch(`${API_URL}/api/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
};

// 로그인
export const postLogin = async (params) => {
    const response = await fetch(`${API_URL}/api/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
    });
    const data = await response.json();
    console.log(data);
    return data;
};

// 회원 정보 조회
export const getUser = async (params) => {
    const response = await fetch(`${API_URL}/api/user/${params}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
};

// 회원 정보 수정
export const putUser = async (params, userId) => {
    const response = await fetch(`${API_URL}/api/user/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
};

// 회원탈퇴

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
