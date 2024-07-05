import React from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color: #4249e5;
    color: #fff;
    border: none;
    cursor: pointer;
    width: 500px;
    height: 70px;
    margin: 30px auto 30px;
    font-size: 20px;
    border-radius: 5px;
    font-family: "SUIT-Regular", sans-serif;
`;

const LoginButton = ({ text, onClick, disabled }) => {
    return (
        <Button onClick={onClick} disabled={disabled}>
            {text}
        </Button>
    );
};

export default LoginButton;
