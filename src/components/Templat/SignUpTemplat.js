import React from "react";
import styled from "styled-components";
import TopNavigationBar from "../organisms/TopNavigationBar";
import SignUpForm from "../molecules/SignUpForm";
import EmailAuth from "../molecules/EmailAuth";

const SignUpStyle = styled.div``;

const SignupTemplat = () => {
    return (
        <SignUpStyle>
            <TopNavigationBar />
            <EmailAuth />
            <SignUpForm />
        </SignUpStyle>
    );
};

export default SignupTemplat;
