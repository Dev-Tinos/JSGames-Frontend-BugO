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
        li {
            font-size: 20px;
            margin-bottom: 20px;
            cursor: pointer;
            list-style-type: none;
            font-weight: bold;
        }
        .clicked {
            font-size: 20px;
            margin-bottom: 20px;
            cursor: pointer;
            list-style-type: none;
            color: #4249e5;
            font-weight: bold;
        }
    }
`;

const RankingNav = ({ setType, type }) => {
    const list = [
        { type: 0, text: "게임 랭킹" },
        { type: 1, text: "유저 랭킹" },
    ];

    return (
        <RankingNavStyle>
            <ul>
                {list.map((item) => (
                    <li
                        onClick={() => setType(item.type)}
                        className={item.type === type ? "clicked" : null}
                        key={item.type}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </RankingNavStyle>
    );
};

export default RankingNav;
