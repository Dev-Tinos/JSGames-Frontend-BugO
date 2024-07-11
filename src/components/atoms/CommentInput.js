import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const InputBox = styled.textarea`
    box-sizing: border-box;
    border: 1px solid #5383e8;
    border-radius: 10px;
    width: 100%;
    resize: none;
    padding: 30px;
    overflow: hidden;
    font-family: "SUIT-Regular", sans-serif;
    font-size: 18px;
    &:focus {
        border: 2px solid #5383e8;
        box-shadow: 0 0 5px #5383e8;
        outline: none;
    }
`;

const CommentInput = ({ type, placeholder, onChange, value }) => {
    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [value]);

    const onhandleChange = (e) => {
        onChange(e.target.value);
    };
    return (
        <InputBox
            ref={textareaRef}
            type={type}
            value={value}
            onChange={onhandleChange}
            placeholder={placeholder}
        />
    );
};

export default CommentInput;
