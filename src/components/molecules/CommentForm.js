import React, { useState } from "react";
import CommentInput from "../atoms/CommentInput";
import CommentBtn from "../atoms/CommentBtn";
import styled from "styled-components";

const CommentFormBox = styled.div`
    width: 1280px;
    margin: auto;
    text-align: center;
`;

const CommentForm = ({ onCommentSubmit }) => {
    const [commentText, setCommentText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (commentText.trim() === "") return;
        onCommentSubmit(commentText);
        setCommentText("");
    };
    return (
        <CommentFormBox>
            <form onSubmit={handleSubmit}>
                <CommentInput
                    type="text"
                    placeholder="댓글을 입력하세요..."
                    value={commentText}
                    onChange={setCommentText}
                />
                <CommentBtn text="입력" />
            </form>
        </CommentFormBox>
    );
};

export default CommentForm;
