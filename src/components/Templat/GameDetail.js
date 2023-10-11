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
        border-radius: 10px;
    }
    h2 {
        width: 1280px;
        margin: 20px auto;
    }
`;

const myRanking = {
    resultId: 123,
    gameId: 123,
    gameScore: "100",
    userId: "나의 랭킹",
    imageUrl: "../../assets/img/tino.png",
};

const GameDetail = ({ game, comment, ranking }) => {
    return (
        <Detailbox>
            <TopNavigationBar />
            <GameFrame gameUrl={game.gameUrl} />
            <h2>게임 설명</h2>
            <div className="gameDocs">
                <p>{game.description}</p>
            </div>
            <h2>랭킹</h2>
            <RankingCardList
                data={ranking}
                myRanking={myRanking}
                ranking={ranking}
            />
            <h2>댓글</h2>
            <CommentList data={comment} />
        </Detailbox>
    );
};

export default GameDetail;
