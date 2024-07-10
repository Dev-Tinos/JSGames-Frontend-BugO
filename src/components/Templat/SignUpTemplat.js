import React, { useState } from "react";
import styled from "styled-components";
import TopNavigationBar from "../organisms/TopNavigationBar";
import SignUpForm from "../molecules/SignUpForm";
import EmailAuth from "../molecules/EmailAuth";

const SignUpStyle = styled.div``;

const SignupTemplat = () => {
    const [type, setType] = useState(0);
    const [email, setEmail] = useState("");
    return (
        <SignUpStyle>
            <TopNavigationBar />
            {type === 0 ? (
                <EmailAuth
                    setType={setType}
                    setEmail={setEmail}
                    email={email}
                />
            ) : (
                <SignUpForm email={email} setEmail={setEmail} />
            )}
        </SignUpStyle>
    );
};

export default SignupTemplat;
