import React, { useState } from "react";
import styled from "styled-components";
import Input from "../atoms/Input";
import LoginButton from "../atoms/LoginButton";
import { postUser } from "../../services/UserApi";
import { useNavigate } from "react-router-dom";

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

const SignUpForm = ({ email }) => {
    const [emailCode, setEamilCode] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [major, setMajor] = useState("");
    const navigate = useNavigate();

    const SignUp = async () => {
        await postUser({
            email: email,
            password: password,
            nickname: nickname,
            major: major,
            code: emailCode,
        });
        navigate("/login");
    };

    return (
        <SignUpStyle>
            <h2>회원가입</h2>
            <div onSubmit={SignUp}>
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
                    <LoginButton
                        text="회원가입"
                        disabled={false}
                        onClick={SignUp}
                    />
                )}
            </div>
        </SignUpStyle>
    );
};

export default SignUpForm;
