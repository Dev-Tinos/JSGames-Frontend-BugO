import React, { useState } from "react";
import CommentInput from "../atoms/CommentInput";
import CommentBtn from "../atoms/CommentBtn";
import styled from "styled-components";
import StarSelect from "../atoms/StarSelect";

const CommentFormBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    text-align: center;
    gap: 20px;
    overflow: -moz-hidden-unscrollable;
    form {
        display: flex;
    }
    .buttonBox {
        width: 100%;
        display: flex;
        justify-content: space-between;
        ul {
            justify-content: left;
        }
    }
`;

const CommentForm = ({ reviewsubmit, setSort, sort }) => {
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
            <div className="buttonBox">
                <StarSelect setSort={setSort} sort={sort} />
                <CommentBtn text="입력" onClick={submit} />
            </div>
        </CommentFormBox>
    );
};

export default CommentForm;
