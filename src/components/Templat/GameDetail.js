import React from "react";
import TopNavigationBar from "../organisms/TopNavigationBar";
import styled from "styled-components";
import CommentList from "../organisms/CommentList";
import RankingCardList from "../organisms/RankingCardList";
import GameFrame from "../atoms/GameFrame";
import RefreshBtn from "../atoms/RefreshBtn";
import Footer from "../organisms/Footer";

const Detailbox = styled.div`
    .gameDocs {
        box-sizing: border-box;
        width: 1280px;
        margin: 20px auto;
        background-color: #ffffff;
        padding: 20px;
        border: 1px solid #ddddff;
        border-radius: 10px;
    }
    h2 {
        width: 1280px;
        margin: 20px auto;
    }
    .ref {
        height: 10px;
        flex-shrink: 0;
    }
`;

const GameDetail = ({
    game,
    review,
    ranking,
    myRanking,
    rankingRefresh,
    btnDisable,
    loaderRef,
    reviewsubmit,
    reviewEdit,
    setReviewEdit,
    reviewSort,
    setReviewSort,
    star,
    setStar,
    myReview,
    rankingRef,
}) => {
    return (
        <Detailbox>
            <TopNavigationBar />
            <GameFrame gameUrl={game.gameUrl} />
            <h2>게임 설명</h2>
            <div className="gameDocs">
                <p>{game.description}</p>
            </div>
            <h2>
                랭킹
                <RefreshBtn onClick={rankingRefresh} btnDisable={btnDisable} />
            </h2>
            <RankingCardList
                data={ranking}
                myRanking={myRanking}
                rankingRef={rankingRef}
            />
            <h2>댓글</h2>
            <CommentList
                data={review}
                reviewsubmit={reviewsubmit}
                reviewEdit={reviewEdit}
                setReviewEdit={setReviewEdit}
                setReviewSort={setReviewSort}
                star={star}
                setStar={setStar}
                reviewSort={reviewSort}
                myReview={myReview}
            />
            <div ref={loaderRef} className="ref"></div>
            <Footer />
        </Detailbox>
    );
};

export default GameDetail;
