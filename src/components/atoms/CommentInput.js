import React from "react";
import styled from "styled-components";

const InputBox = styled.input`
    width: 80%;
    height: 70px;
    border: 2px solid #ccc;
    border-radius: 5px;
    margin-right: 20px;
`;

const CommentInput = ({ type, placeholder, onChange, value }) => {
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

export default CommentInput;
