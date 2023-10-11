import React from "react";
import Comment from "../molecules/Comment";
import styled from "styled-components";
import CommentForm from "../molecules/CommentForm";

const CommentStyle = styled.div`
    margin: auto;
    width: 1280px;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #d9d9d9;
    border-radius: 10px;
`;

const CommentList = ({ data }) => {
    return (
        <CommentStyle>
            <CommentForm />
            {data.map((item) => (
                <Comment key={item.commentId} item={item} />
            ))}
        </CommentStyle>
    );
};

export default CommentList;
