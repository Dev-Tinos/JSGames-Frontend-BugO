import React from "react";
import styled from "styled-components";

const RankingNavStyle = styled.div`
    box-sizing: border-box;
    width: 200px;
    margin-right: 40px;
    display: block;
    padding: 15px;
    .menu {
        position: sticky;
        top: 40px;
    }
    ul {
        display: flex;
        flex-direction: column;
        width: 200px;
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
    .title {
        margin-left: 40px;
        margin-top: 30px;
    }
    .text {
        padding: 15px 20px;
        margin: 20px 40px;
        background-color: #444444;
        border-radius: 5px;
        color: #ffffff;
        display: none;
        p {
            white-space: nowrap;
            font-size: 20px;
            margin: 0 0 20px;
        }
        ul {
            width: auto;
            margin: 0;
            padding: 0;
            li {
                font-size: 16px;
                font-weight: normal;
                margin: 0 0 10px;
            }
        }
    }
    .title:hover + .text {
        display: inline-block;
        position: relative;
        z-index: 5;
    }
`;

const RankingNav = ({ setType, type }) => {
    const list = [
        { type: 0, text: "게임 랭킹" },
        { type: 1, text: "유저 랭킹" },
        { type: 2, text: "학과별 랭킹" },
        { type: 3, text: "학과내 랭킹" },
    ];

    return (
        <RankingNavStyle>
            <div className="menu">
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
                <div className="title">
                    랭킹 설정 기준 <i class="fa-regular fa-circle-question"></i>
                </div>
                <div className="text">
                    <p>각 게임 마다 1~100등까지 점수를 매겨 랭킹을 설정</p>
                    <ul>
                        <li>1등 ~ 10등 : 450점 ~ 270점</li>
                        <li>11등 ~ 50등 : 250점 ~ 55점</li>
                        <li>51등 ~ 100등 : 50점 ~ 1점</li>
                    </ul>
                </div>
            </div>
        </RankingNavStyle>
    );
};

export default RankingNav;
