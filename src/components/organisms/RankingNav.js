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

const RankingNav = ({ data }) => {
    return (
        <RankingNavStyle>
            <ul>
                {data.map((item) => (
                    <li key={item.type}>{item.text}</li>
                ))}
            </ul>
        </RankingNavStyle>
    );
};

export default RankingNav;
