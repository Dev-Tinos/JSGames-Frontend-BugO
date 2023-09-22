import React, { useState } from "react";
import Input from "../atoms/Input.js";
import LoginButton from "../atoms/LoginButton.js";
import styled from "styled-components";

const LoginStyle = styled.div`
    background-color: #d9d9d9;
    padding: 10px;
    width: 500px;
    text-align: center;
    margin: 20px;
`;

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Login = () => {
        alert("email: " + email + "\n password: " + password);
    };

    return (
        <LoginStyle>
            <h2>Login</h2>
            <form>
                <div>
                    <Input
                        type="text"
                        placeholder={"Email"}
                        onChange={setEmail}
                    />
                    <Input
                        type="password"
                        placeholder={"Password"}
                        onChange={setPassword}
                    />
                </div>
                <div>
                    <LoginButton text="로그인" onClick={Login} />
                </div>
            </form>
        </LoginStyle>
    );
};

export default LoginForm;
