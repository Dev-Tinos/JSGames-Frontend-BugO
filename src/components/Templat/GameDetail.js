import React from "react";
import TopNavigationBar from "../organisms/TopNavigationBar";
import styled from "styled-components";
import CommentList from "../organisms/CommentList";
import RankingCardList from "../organisms/RankingCardList";
import GameFrame from "../atoms/GameFrame";

const Detailbox = styled.div`
    .gameDocs {
        width: 1240px;
        margin: 20px auto;
        background-color: #d9d9d9;
        padding: 20px;
    }
    h2 {
        width: 1280px;
        margin: 20px auto;
    }
`;

const comments = [
    {
        commentId: 1,
        userId: "user1",
        gameId: 1,
        commentContent: "댓글 1",
        dateTime: "2023-01-01 10:00:00",
        imageUrl: "../../assets/img/tino.png",
    },
    {
        commentId: 2,
        userId: "user1",
        gameId: 1,
        commentContent: "댓글 2",
        dateTime: "2023-01-01 11:00:00",
        imageUrl: "../../assets/img/tino.png",
    },
    {
        commentId: 3,
        userId: "user1",
        gameId: 1,
        commentContent: "댓글 3",
        dateTime: "2023-01-01 12:00:00",
        imageUrl: "../../assets/img/tino.png",
    },
    {
        commentId: 4,
        userId: "user1",
        gameId: 1,
        commentContent: "댓글 4",
        dateTime: "2023-01-01 13:00:00",
        imageUrl: "../../assets/img/tino.png",
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

const myRanking = {
    resultId: 123,
    gameId: 123,
    gameScore: "100",
    userId: "나의 랭킹",
    imageUrl: "../../assets/img/tino.png",
};

const GameDetail = ({ data }) => {
    return (
        <Detailbox>
            <TopNavigationBar />
            <GameFrame gameUrl={data.gameUrl} />
            <h2>게임 설명</h2>
            <div className="gameDocs">
                <p>{data.description}</p>
            </div>
            <h2>랭킹</h2>
            <RankingCardList data={ranking} myRanking={myRanking} />
            <h2>댓글</h2>
            <CommentList data={comments} />
        </Detailbox>
    );
};

export default GameDetail;
