import React from "react";
import styled from "styled-components";

const SkeletonStyle = styled.div`
    background-color: #fff;
    list-style-type: none;
    width: 380px;
    height: 300px;
    margin: 10px;
    float: left;
    border-radius: 10px;
    box-shadow: 0 0 0 2px #ccc;

    .skeleton-img {
        margin: 10px auto;
        display: block;
        width: 360px;
        height: 220px;
        object-fit: cover;
        background-color: #dfdfdf;
        border-radius: 10px;
    }
    .title {
        width: 70%;
        height: 25px;
        background-color: #dfdfdf;
        margin: 0px 10px 5px 10px;
    }
    .text {
        width: 20%;
        height: 19px;
        background-color: #dfdfdf;
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
