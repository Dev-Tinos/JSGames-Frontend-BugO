import React from "react";
import styled from "styled-components";

const InputBox = styled.input`
    width: 89%;
    height: 70px;
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
