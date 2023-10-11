import React from "react";
import styled from "styled-components";

const RankingNavStyle = styled.div`
    width: 240px;
    height: 800px;
    background-color: #fafafa;
    display: block;
    padding: 15px;
    ul {
        width: 240px;
    }
    li {
        font-size: 20px;
        margin-bottom: 20px;
        cursor: pointer;
        list-style-type: none;
    }
`;

const RankingNav = () => {
    return (
        <RankingNavStyle>
            <ul>
                <li>유저 랭킹</li>
                <li>게임 랭킹</li>
            </ul>
        </RankingNavStyle>
    );
};

export default RankingNav;
