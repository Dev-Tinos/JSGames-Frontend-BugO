import React from "react";
import TopNavigationBar from "../organisms/TopNavigationBar";
import RankingList from "../organisms/RankingList";
import styled from "styled-components";
import RankingNav from "../organisms/RankingNav";

const game = [
    {
        gameId: 1,
        gmaeName: "game1",
    },
    {
        gameId: 2,
        gmaeName: "game2",
    },
    {
        gameId: 3,
        gmaeName: "game3",
    },
    {
        gameId: 4,
        gmaeName: "game4",
    },
];

const ranking = [
    {
        resultId: 1,
        gameId: 1,
        gameScore: "100",
        userId: "user1",
        imageUrl: "../../assets/img/tino.png",
    },
    {
        resultId: 2,
        gameId: 1,
        gameScore: "90",
        userId: "user2",
        imageUrl: "../../assets/img/tino.png",
    },
    {
        resultId: 3,
        gameId: 1,
        gameScore: "80",
        userId: "user3",
        imageUrl: "../../assets/img/tino.png",
    },
];

const RankingStyle = styled.div`
    .commentbox {
        width: 1040px;
        height: 800px;
    }
    .container {
        margin: auto;
        display: flex;
        width: 1280px;
    }
    .navigation {
        width: 240px;
        height: 800px;
        background-color: #fafafa;
        display: block;
        padding: 15px;
    }
    .RankingListStyle {
        display: "flex";
    }
    li {
        list-style-type: none;
    }
    .commentbox {
        background-color: #fff;
    }
`;

const RankingTemlat = () => {
    return (
        <RankingStyle>
            <TopNavigationBar />
            <div className="container">
                <RankingNav data={game} />
                <RankingList data={ranking} />
            </div>
        </RankingStyle>
    );
};

export default RankingTemlat;
