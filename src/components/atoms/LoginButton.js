import React from "react";
import styled from "styled-components";

const Button = styled.button`
    padding: 8px 16px;
    background-color: #4249e5;
    color: #fff;
    border: none;
    cursor: pointer;
    width: 450px;
    height: 50px;
    margin: 10px;
`;

const LoginButton = ({ text, onClick }) => {
    return (
        <Button onClick={onClick} className="button">
            {text}
        </Button>
    );
};

export default LoginButton;
