import React from "react";
import Comment from "../molecules/Comment";
import styled from "styled-components";
import CommentForm from "../molecules/CommentForm";
import ReviewSortSelect from "../atoms/ReviewSortSelect";

const CommentStyle = styled.div`
    margin: auto;
    width: 1280px;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #d9d9d9;
    border-radius: 10px;
`;

const CommentList = ({ data, reviewsubmit, setReviewSort }) => {
    const userId = localStorage.getItem("userId");
    const OPTIONS = [
        { value: "recent", name: "최근순" },
        { value: "oldest", name: "오래된순" },
        { value: "star", name: "별점순" },
        { value: "helpful", name: "도움순" },
    ];
    return (
        <CommentStyle>
            {userId === null ? null : (
                <CommentForm reviewsubmit={reviewsubmit} />
            )}
            <ReviewSortSelect item={OPTIONS} setSort={setReviewSort} />
            {data.map((item) => (
                <Comment key={item.reviewId} item={item} />
            ))}
        </CommentStyle>
    );
};

export default CommentList;
