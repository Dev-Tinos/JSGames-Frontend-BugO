import React from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color: #4249e5;
    color: #fff;
    border: none;
    cursor: pointer;
    width: 450px;
    height: 50px;
    margin: 10px;
`;

const LoginButton = ({ text, onClick, disabled }) => {
    return (
        <Button onClick={onClick} disabled={disabled}>
            {text}
        </Button>
    );
};

export default LoginButton;
