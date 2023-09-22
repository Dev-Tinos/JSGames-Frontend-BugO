import React from "react";
import TopNavigationBar from "../organisms/TopNavigationBar";
import LoginForm from "../molecules/LoginForm";
import styled from "styled-components";

const LoginPageStyle = styled.div`
    .test {
        background-color: blue;
    }
`;

const LoginPage = () => {
    return (
        <LoginPageStyle>
            <TopNavigationBar />
            <LoginForm className="test" />
        </LoginPageStyle>
    );
};

export default LoginPage;
