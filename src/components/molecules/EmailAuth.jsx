import React from "react";
import styled from "styled-components";
import Input from "../atoms/Input";
import LoginButton from "../atoms/LoginButton";
import { postEmail } from "../../services/EmailApi";

const EmailBox = styled.div`
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
const EmailAuth = ({ setType, setEmail, email }) => {
    const Auth = async () => {
        await postEmail({ email: email });
        setType(1);
    };

    return (
        <EmailBox>
            <h2>Email 인증</h2>
            <p>@tukorea.ac.kr 인 도메인만 사용 가능합니다.</p>
            <div className="emailBox">
                <Input
                    type="text"
                    placeholder={"Email"}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <LoginButton text={"인증코드 발송"} onClick={Auth} />
            </div>
        </EmailBox>
    );
};

export default EmailAuth;
