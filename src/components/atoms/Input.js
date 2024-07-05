import React from "react";
import styled from "styled-components";

const InputBox = styled.input`
    box-sizing: border-box;
    display: block;
    background-color: #fff;
    border: none;
    width: 500px;
    height: 70px;
    margin: 10px auto;
    border: 1px solid #d1d1d1;
    border-radius: 5px;
    padding: 10px 16px;
    font-size: 18px;
    font-family: "SUIT-Regular", sans-serif;
`;

const Input = ({ type, placeholder, onChange, value }) => {
    return (
        <InputBox
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default Input;
