import React, { useState } from "react";
import Input from "../atoms/Input.js";
import LoginButton from "../atoms/LoginButton.js";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

    const Login = () => {
        alert("email: " + email + "\n password: " + password);
    };

    return (
        <LoginStyle>
            <h2>로그인</h2>
            <form>
                <Input type="text" placeholder={"Email"} onChange={setEmail} />
                <Input
                    type="password"
                    placeholder={"Password"}
                    onChange={setPassword}
                />
                <LoginButton text="로그인" onClick={Login} />
                <p className="signup">
                    <Link to={"/signup"}>처음이신가요?</Link>
                </p>
            </form>
        </LoginStyle>
    );
};

export default LoginForm;
