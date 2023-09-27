const API_URL = "http://54.210.228.54:8080/api";

// 회원가입
export const postUser = async (params) => {
    const response = await fetch(`${API_URL}/user`, {
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
    const response = await fetch(`${API_URL}/user/login`, {
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
    const response = await fetch(`${API_URL}/user/${params}`, {
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
    const response = await fetch(`${API_URL}/user/${userId}`, {
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
