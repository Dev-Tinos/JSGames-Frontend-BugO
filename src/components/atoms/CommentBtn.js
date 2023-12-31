import React from "react";
import styled from "styled-components";

const Button = styled.button`
    width: 10%;
    height: 70px;
    background-color: #4249e5;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const CommentBtn = ({ text, onClick }) => {
    return (
        <Button onClick={onClick} className="button">
            {text}
        </Button>
    );
};

export default CommentBtn;
