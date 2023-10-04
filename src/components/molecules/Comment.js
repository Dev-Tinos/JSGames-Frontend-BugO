import React from "react";
import styled from "styled-components";

const CommentBox = styled.div`
    align-items: center;
    background-color: #fff;
    width: 90%;
    margin: auto;
    display: flex;
    margin-top: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    padding-right: 20px;
    padding-left: 20px;
    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 10px;
        background-color: red;
    }
    .name {
        font-weight: bold;
        font-size: 18px;
        margin: 10px 0px 8px 0px;
    }
    .text {
        font-size: 15px;
        margin: 0px;
    }
    .date {
        margin-top: 5px;
        font-size: 12px;
    }
`;

const Comment = ({ item }) => {
    return (
        <CommentBox>
            <img
                src={require("../../assets/img/tino.png")}
                alt={`${item.userId}`}
            />
            <div className="comment-content">
                <p className="name">{item.userId}</p>
                <p className="text">{item.commentContent}</p>
                <p className="date">{item.dateTime}</p>
            </div>
        </CommentBox>
    );
};

export default Comment;
