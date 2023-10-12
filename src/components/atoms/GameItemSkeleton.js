import React from "react";
import styled from "styled-components";

const SkeletonStyle = styled.div`
    background-color: #fff;
    list-style-type: none;
    width: 380px;
    margin: 10px;
    float: left;
    border-radius: 10px;
    border: 2px solid #ccc;

    .skeleton-img {
        margin: 10px auto;
        display: block;
        width: 360px;
        height: 220px;
        object-fit: cover;
        background-color: #cfcfcf;
        border-radius: 10px;
    }
    .title {
        width: 70%;
        height: 25px;
        background-color: #cfcfcf;
        margin: 10px 0px 10px 10px;
    }
    .text {
        width: 50%;
        height: 19px;
        background-color: #ccc;
        margin: 0px 0px 10px 10px;
    }
`;

const GameItemSkeleton = () => {
    return (
        <SkeletonStyle>
            <div className="skeleton-img" />
            <p className="title" />
            <p className="text" />
        </SkeletonStyle>
    );
};

export default GameItemSkeleton;
