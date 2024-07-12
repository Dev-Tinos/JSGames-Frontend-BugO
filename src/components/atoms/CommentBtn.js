import React from "react";
import styled from "styled-components";

const Button = styled.button`
    padding: 20px 50px;
    background-color: #5383e8;
    color: #fff;
    border: none;
    border-radius: 5px;
    min-height: 55px;
    width: 130px;
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
