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
    form {
        display: flex;
    }
    .submitBox {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .buttonBox {
        display: flex;
        gap: 20px;
    }
    .editBox {
        width: 100%;
        display: flex;
        justify-content: end;
        gap: 20px;
    }
`;

const CommentForm = ({
    reviewsubmit,
    reviewEdit,
    setReviewEdit,
    setSort,
    sort,
    type,
    IsEdit,
    star,
}) => {
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
            {type ? (
                <div className="submitBox">
                    <StarSelect setSort={setSort} sort={sort} />
                    <div className="buttonBox">
                        <CommentBtn text="취소" onClick={IsEdit} />
                        <CommentBtn text="입력" onClick={submit} />
                    </div>
                </div>
            ) : (
                <div className="submitBox">
                    <StarSelect setSort={setSort} sort={sort} />
                    <CommentBtn text="입력" onClick={submit} />
                </div>
            )}
        </CommentFormBox>
    );
};

export default CommentForm;
