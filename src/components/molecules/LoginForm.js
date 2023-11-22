import React, { useState } from "react";
import Input from "../atoms/Input.js";
import LoginButton from "../atoms/LoginButton.js";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../../services/UserApi.js";

const LoginStyle = styled.div`
    background-color: #d9d9d9;
    padding: 10px;
    width: 500px;
    text-align: center;
    margin: 50px auto;
    .btn {
        height: 50px;
        cursor: pointer;
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
        await postLogin({ email: email, password: password });
        navigate("/");
    };

    return (
        <LoginStyle>
            <h2>로그인</h2>
            <Input
                type="text"
                placeholder={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
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
