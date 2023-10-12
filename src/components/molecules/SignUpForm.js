import React, { useState } from "react";
import styled from "styled-components";
import Input from "../atoms/Input";
import LoginButton from "../atoms/LoginButton";
import { postUser } from "../../services/userApi";

const SignUpStyle = styled.div`
    background-color: #d9d9d9;
    padding: 10px;
    width: 500px;
    text-align: center;
    margin: 50px auto;
    Button {
        margin-top: 30px;
    }
`;

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [major, setMajor] = useState("");

    const SignUp = async () => {
        if (password !== confirmPassword) {
            return alert("비밀번호와 비밀번호 확인이 같지 않습니다.");
        }

        const result = await postUser({
            nickname: nickname,
            email: email,
            password: password,
            major: major,
        });

        alert(result);
    };

    return (
        <SignUpStyle>
            <h2>회원가입</h2>
            <form onSubmit={SignUp}>
                <Input type="text" placeholder={"Email"} onChange={setEmail} />
                <Input
                    type="password"
                    placeholder={"Password"}
                    onChange={setPassword}
                />
                <Input
                    type="password"
                    placeholder={"Password 확인"}
                    onChange={setConfirmPassword}
                />
                <Input
                    type="text"
                    placeholder={"nickname"}
                    onChange={setNickname}
                />
                <Input type="text" placeholder={"전공"} onChange={setMajor} />
                <LoginButton text="회원가입" />
            </form>
        </SignUpStyle>
    );
};

export default SignUpForm;
