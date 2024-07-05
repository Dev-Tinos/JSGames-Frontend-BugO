import React from "react";
import Comment from "../molecules/Comment";
import styled from "styled-components";
import CommentForm from "../molecules/CommentForm";
import ReviewSortSelect from "../atoms/ReviewSortSelect";

const CommentStyle = styled.div`
    box-sizing: border-box;
    border: 1px solid #5383e8;
    margin: auto;
    width: 1280px;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #ffffff;
    border-radius: 10px;
`;

const CommentList = ({
    data,
    reviewsubmit,
    setReviewSort,
    star,
    setStar,
    reviewSort,
    myReview,
}) => {
    const userId = localStorage.getItem("userId");
    const OPTIONS = [
        { value: "RECENT", name: "최근순" },
        { value: "OLDEST", name: "오래된순" },
        { value: "STAR", name: "별점순" },
        { value: "HELPFUL", name: "도움순" },
    ];

    const STAR = [
        { value: 1, name: "★☆☆☆☆" },
        { value: 2, name: "★★☆☆☆" },
        { value: 3, name: "★★★☆☆" },
        { value: 4, name: "★★★★☆" },
        { value: 5, name: "★★★★★" },
    ];

    return (
        <CommentStyle>
            {userId === null || myReview != null ? null : (
                <div>
                    <CommentForm reviewsubmit={reviewsubmit} />
                    <ReviewSortSelect
                        item={STAR}
                        setSort={setStar}
                        sort={star}
                        type={"star"}
                    />
                </div>
            )}
            {myReview === null ? null : (
                <Comment item={myReview} STAR={STAR} styled="my" />
            )}
            <ReviewSortSelect
                item={OPTIONS}
                setSort={setReviewSort}
                sort={reviewSort}
            />
            {data.map((item) => (
                <Comment key={item.reviewId} item={item} STAR={STAR} />
            ))}
        </CommentStyle>
    );
};

export default CommentList;
