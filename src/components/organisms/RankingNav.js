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
        width: 600px;
        padding: 15px 20px;
        margin: 20px 40px;
        background-color: #444444;
        border-radius: 5px;
        color: #ffffff;
        display: none;
    }
    .title:hover + .text {
        display: block;
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
                    각 Game마다 1~100등까지 결과들에 점수를 매겨 전체 게임 유저
                    랭킹을 설정
                    <li>
                        게임마다 10등 부터 1등까지 20의 배수로 증가 (10명)
                        (10등)270점 ~ (1등)450점
                    </li>
                    <li>
                        게임마다 10등 부터 1등까지 20의 배수로 증가 (10명)
                        (10등)270점 ~ (1등)450점
                    </li>
                    <li>
                        게임마다 10등 부터 1등까지 20의 배수로 증가 (10명)
                        (10등)270점 ~ (1등)450점
                    </li>
                </div>
            </div>
        </RankingNavStyle>
    );
};

export default RankingNav;
