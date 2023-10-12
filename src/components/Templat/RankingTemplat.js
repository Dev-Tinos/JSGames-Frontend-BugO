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

const RankingTemplat = () => {
    return (
        <RankingStyle>
            <TopNavigationBar />
            <div className="container">
                <RankingNav data={game} />
                <div className="rankingBox">
                    <RankingList data={ranking} />
                </div>
                <div className="space" />
            </div>
        </RankingStyle>
    );
};

export default RankingTemplat;
