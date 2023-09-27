import React, { useState } from "react";
import Input from "../atoms/Input.js";
import LoginButton from "../atoms/LoginButton.js";
import styled from "styled-components";

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
`;

const LoginForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Login = () => {
        alert("email: " + email + "\n password: " + password);
    };

    return (
        <LoginStyle>
            <h2>Login</h2>
            <form>
                <Input type="text" placeholder={"Email"} onChange={setEmail} />
                <Input
                    type="password"
                    placeholder={"Password"}
                    onChange={setPassword}
                />
                <LoginButton text="로그인" onClick={Login} />
            </form>
        </LoginStyle>
    );
};

export default LoginForm;
