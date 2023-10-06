import React from "react";
import styled from "styled-components";

const RankingNavStyle = styled.div`
    width: 240px;
    height: 800px;
    background-color: #fafafa;
    display: block;
    padding: 15px;
    li {
        font-size: 20px;
        margin-bottom: 20px;
        cursor: pointer;
    }
`;

const RankingNav = () => {
    return (
        <RankingNavStyle>
            <ul>
                <li>종합 순위</li>
            </ul>
        </RankingNavStyle>
    );
};

export default RankingNav;
