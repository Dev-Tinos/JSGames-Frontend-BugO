import React from "react";
import styled from "styled-components";
import Input from "../atoms/Input";
import LoginButton from "../atoms/LoginButton";
import { postEmail } from "../../services/EmailApi";

const EmailBox = styled.div`
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
        margin: 24px 0;
    }
    label {
        display: inline-block;
        text-align: left;
        margin: 30px auto 20px;
    }
    .emailBox {
        display: flex;
        padding: 20px 30px;
        height: auto;
        gap: 10px;
        Input {
            width: 500px;
            margin: 0px;
        }
        Button {
            width: 150px;
            margin: 0px;
        }
    }
`;
const EmailAuth = ({ setType, setEmail, email }) => {
    const Auth = async () => {
        await postEmail({ email: email });
        setType(1);
    };

    return (
        <EmailBox>
            <h1>Email 인증</h1>
            <label>@tukorea.ac.kr 인 도메인만 사용 가능합니다.</label>
            <div className="emailBox">
                <Input
                    type="email"
                    placeholder={"Email"}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <LoginButton text={"인증코드 발송"} onClick={Auth} />
            </div>
        </EmailBox>
    );
};

export default EmailAuth;
