import React, { useState } from "react";
import styled from "styled-components";
import Input from "../atoms/Input";
import LoginButton from "../atoms/LoginButton";
import { postUser } from "../../services/UserApi";
import { useNavigate } from "react-router-dom";
import MajorSelect from "../atoms/MajorSelect";

const SignUpStyle = styled.div`
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
        margin: 20px auto 0;
        width: 500px;
    }
    .warning {
        color: red;
        margin: 0px;
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
    const [major, setMajor] = useState("(학과)");
    const navigate = useNavigate();
    const OPTIONS = [
        { value: "(학과)" },
        { value: "소프트웨어학과" },
        { value: "컴퓨터공학과" },
        { value: "인공지능학과" },
        { value: "게임공학과" },
        { value: "산업경영학과" },
        { value: "IT경영학과" },
        { value: "데이터사이언스경영학과" },
        { value: "글로벌융합공학과" },
        { value: "기계공학과" },
        { value: "기계설계공학과" },
        { value: "나노반도체공학과" },
        { value: "메카트로닉스학과" },
        { value: "AI로봇학과" },
        { value: "산업디자인공학과" },
        { value: "미디어디자인학과" },
        { value: "생명화학공학과" },
        { value: "신소재공학과" },
        { value: "에너지전기공학과" },
        { value: "지식융합학과" },
        { value: "전자공학과" },
        { value: "임베디드시스템학과" },
    ];
    const SignUp = async () => {
        if (major === "(학과)") {
            alert("학과를 선택해 주세요");
            return;
        }
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
            <h1>회원가입</h1>
            <div onSubmit={SignUp}>
                <label>이메일</label>
                <Input
                    type="email"
                    placeholder={"이메인 인증 코드"}
                    value={emailCode}
                    onChange={(e) => setEamilCode(e.target.value)}
                />
                <label>비밀번호</label>
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
                <label>닉네임</label>
                <Input
                    type="text"
                    placeholder={"닉네임"}
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
                <label>학과</label>
                <MajorSelect item={OPTIONS} setMajor={setMajor} />
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
