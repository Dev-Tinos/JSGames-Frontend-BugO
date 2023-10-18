import React from "react";
import TopNavigationBar from "../organisms/TopNavigationBar";
import RankingList from "../organisms/RankingList";
import styled from "styled-components";
import RankingNav from "../organisms/RankingNav";

const RankingStyle = styled.div`
    .commentbox {
        width: 1040px;
        height: 800px;
    }
    .container {
        display: flex;
        margin: auto;
    }
    .commentbox {
        background-color: #fff;
        margin: auto;
    }
    .space {
        width: 270px;
        padding: 15px;
    }
    .rankingBox {
        flex: 1;
    }
`;

const rankingMenu = [
    { type: 1, text: "게임 랭킹(조회수)" },
    { type: 2, text: "유저 랭킹" },
];

const RankingTemplat = ({ data, page, size }) => {
    return (
        <RankingStyle>
            <TopNavigationBar />
            <div className="container">
                <RankingNav data={rankingMenu} />
                <div className="rankingBox">
                    <RankingList data={data} page={page} size={size} />
                </div>
                <div className="space" />
            </div>
        </RankingStyle>
    );
};

export default RankingTemplat;
