import React from "react";
import styled from "styled-components";

const BlockStyle = styled.div`
    box-sizing: border-box;
    list-style-type: none;
    width: 380px;
    height: 350px;
    margin: 0 10px 10px;
    padding: 10px;
    display: inline-block;
    border-radius: 10px;
    box-shadow: 0 0 0 2px #dfdfdf;

    .ad {
        box-sizing: border-box;
        display: block;
        width: 360px;
        height: 280px;
        object-fit: cover;
        background-color: #efefef;
        border-radius: 10px;
    }
`;

const AdBlock = () => {
    return (
        <BlockStyle>
            <div className="ad"></div>
        </BlockStyle>
    );
};

export default AdBlock;
