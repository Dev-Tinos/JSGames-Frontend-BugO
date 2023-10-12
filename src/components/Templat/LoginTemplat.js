import React from "react";
import TopNavigationBar from "../organisms/TopNavigationBar";
import LoginForm from "../molecules/LoginForm";
import styled from "styled-components";

const LoginPageStyle = styled.div`
    .LoginStyle {
    }
`;

const LoginTemplat = () => {
    return (
        <LoginPageStyle>
            <TopNavigationBar />
            <LoginForm />
        </LoginPageStyle>
    );
};

export default LoginTemplat;
