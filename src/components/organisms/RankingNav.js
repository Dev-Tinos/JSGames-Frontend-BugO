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
                <li>game1</li>
                <li>game2</li>
                <li>game3</li>
                <li>game4</li>
            </ul>
        </RankingNavStyle>
    );
};

export default RankingNav;
