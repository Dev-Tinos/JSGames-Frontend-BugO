import React from "react";
import styled from "styled-components";

const InputBox = styled.input`
    background-color: #fff;
    border: none;
    width: 450px;
    height: 50px;
    margin: 10px;
`;

const Input = ({ type, placeholder, onChange, value }) => {
    const onhandleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <InputBox
            type={type}
            value={value}
            onChange={onhandleChange}
            placeholder={placeholder}
        />
    );
};

export default Input;
