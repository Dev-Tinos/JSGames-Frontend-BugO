import React from "react";
import styled from "styled-components";
import TopNavigationBar from "../organisms/TopNavigationBar";
import SignUpForm from "../molecules/SignUpForm";

const SignUpStyle = styled.div``;

const SignupTemplat = () => {
    return (
        <SignUpStyle>
            <TopNavigationBar />
            <SignUpForm />
        </SignUpStyle>
    );
};

export default SignupTemplat;
