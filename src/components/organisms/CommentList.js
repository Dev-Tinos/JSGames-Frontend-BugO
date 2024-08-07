import React from "react";
import Comment from "../molecules/Comment";
import styled from "styled-components";
import CommentForm from "../molecules/CommentForm";
import ReviewSortSelect from "../atoms/ReviewSortSelect";

const CommentStyle = styled.div`
    box-sizing: border-box;
    margin: auto;
    width: 1280px;
    background-color: #ffffff;
    border-radius: 10px;
`;

const OPTIONS = [
    { value: "RECENT", name: "최근순" },
    { value: "OLDEST", name: "오래된순" },
    { value: "STAR", name: "별점순" },
    { value: "HELPFUL", name: "도움순" },
];

const CommentList = ({
    data,
    reviewsubmit,
    reviewEdit,
    setReviewEdit,
    setReviewSort,
    star,
    setStar,
    reviewSort,
    myReview,
}) => {
    const userId = localStorage.getItem("userId");

    return (
        <CommentStyle>
            {userId === null || myReview != null ? null : (
                <CommentForm
                    reviewsubmit={reviewsubmit}
                    setSort={setStar}
                    sort={star}
                />
            )}
            {myReview === null ? null : (
                <Comment
                    item={myReview}
                    styled="my"
                    reviewsubmit={reviewsubmit}
                    reviewEdit={reviewEdit}
                    setReviewEdit={setReviewEdit}
                    setSort={setStar}
                    sort={star}
                />
            )}
            <ReviewSortSelect
                item={OPTIONS}
                setSort={setReviewSort}
                sort={reviewSort}
            />
            <div>
                {data.map((item) => (
                    <Comment key={item.reviewId} item={item} />
                ))}
            </div>
        </CommentStyle>
    );
};

export default CommentList;
