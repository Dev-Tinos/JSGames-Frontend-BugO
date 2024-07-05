import React, { useState } from "react";
import CommentInput from "../atoms/CommentInput";
import CommentBtn from "../atoms/CommentBtn";
import styled from "styled-components";

const CommentFormBox = styled.div`
    box-sizing: border-box;
    width: 95%;
    margin: auto;
    text-align: center;
    form {
        display: flex;
    }
`;

const CommentForm = ({ reviewsubmit }) => {
    const [reviewText, setreviewText] = useState("");
    const submit = () => {
        reviewsubmit(reviewText);
    };
    return (
        <CommentFormBox>
            <CommentInput
                type="text"
                placeholder="댓글을 입력하세요..."
                value={reviewText}
                onChange={setreviewText}
            />
            <CommentBtn text="입력" onClick={submit} />
        </CommentFormBox>
    );
};

export default CommentForm;
