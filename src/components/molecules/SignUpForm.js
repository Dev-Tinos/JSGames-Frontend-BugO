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
    .warning {
        color: red;
        margin: 0px;
    }
    Button {
    }
    .emailBox {
        margin: 10px;
        height: 50px;
        Input {
            width: 350px;
            margin: 0px;
        }
        Button {
            width: 100px;
            margin: 0px;
        }
    }
`;

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [emailCode, setEamilCode] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [major, setMajor] = useState("");

    const SignUp = async () => {
        const result = await postUser({
            email: email,
            password: password,
            nickname: nickname,
            major: major,
            code: emailCode,
        });

        return alert(result);
    };

    return (
        <SignUpStyle>
            <h2>회원가입</h2>
            <form onSubmit={SignUp}>
                <Input
                    type="text"
                    placeholder={"Email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder={"이메인 인증 코드"}
                    value={emailCode}
                    onChange={(e) => setEamilCode(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder={"비밀번호"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder={"비밀번호 확인"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {password !== confirmPassword ? (
                    <p className="warning">비밀번호와 동일하지 않습니다.</p>
                ) : null}
                <Input
                    type="text"
                    placeholder={"닉네임"}
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder={"전공"}
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                />
                {password !== confirmPassword ? (
                    <LoginButton text="회원가입" disabled={true} />
                ) : (
                    <LoginButton text="회원가입" disabled={false} />
                )}
            </form>
        </SignUpStyle>
    );
};

export default SignUpForm;
