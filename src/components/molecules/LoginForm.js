import React, { useState } from "react";
import Input from "../atoms/Input.js";
import LoginButton from "../atoms/LoginButton.js";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../../services/UserApi.js";

const LoginStyle = styled.div`
    background-color: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 5px;
    padding: 10px;
    width: 600px;
    text-align: center;
    margin: 50px auto;
    font-size: 18px;
    h1 {
        font-size: 36px;
        font-weight: 700;
        margin: 24px 0 54px;
    }
    label {
        display: block;
        text-align: left;
        margin: 30px auto 0;
        width: 500px;
    }
    .signup {
        a {
            text-decoration: none;
        }
    }
`;

const LoginForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const Login = async () => {
        try {
            const data = await postLogin({ email: email, password: password });
            if (data.status === 200) {
                navigate("/");
            } else {
                alert(data.data.message);
            }
        } catch (error) {}
    };

    return (
        <LoginStyle>
            <h1>로그인</h1>
            <label>이메일</label>
            <Input
                type="email"
                placeholder={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label>비밀번호</label>
            <Input
                type="password"
                placeholder={"Password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <LoginButton text="로그인" onClick={Login} />
            <p className="signup">
                <Link to={"/signup"}>처음이신가요?</Link>
            </p>
        </LoginStyle>
    );
};

export default LoginForm;
