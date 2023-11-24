import React from "react";
import styled from "styled-components";

const InputBox = styled.input`
    background-color: #fff;
    border: none;
    width: 90%;
    height: 50px;
    margin: 10px;
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
