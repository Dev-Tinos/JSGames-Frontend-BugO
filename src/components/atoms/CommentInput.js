import React from "react";
import styled from "styled-components";

const InputBox = styled.input`
    width: 90%;
    height: 70px;
    /* border: 2px solid #ccc; */
    border: 0px;
    border-radius: 5px;
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
