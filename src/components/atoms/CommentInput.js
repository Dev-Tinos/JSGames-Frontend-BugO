import React from "react";
import styled from "styled-components";

const InputBox = styled.textarea`
    box-sizing: border-box;
    border: 1px solid #5383e8;
    border-radius: 10px;
    width: 100%;
    resize: none;
    padding: 20px;
    &:focus {
        border: 2px solid #5383e8;
        box-shadow: 0 0 5px #5383e8;
        outline: none;
    }
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
