import React from "react";
import TopNavigationBar from "../organisms/TopNavigationBar";
import LoginForm from "../molecules/LoginForm";
import styled from "styled-components";
import SignUpForm from "../molecules/SignUpForm";

const LoginPageStyle = styled.div`
    .LoginStyle {
    }
`;

const LoginPage = () => {
    return (
        <LoginPageStyle>
            <TopNavigationBar />
            <LoginForm />
            <SignUpForm />
        </LoginPageStyle>
    );
};

export default LoginPage;
