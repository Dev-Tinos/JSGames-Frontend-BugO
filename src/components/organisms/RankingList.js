import React from "react";
import styled from "styled-components";
import RankingItem from "../molecules/RankingItem";

const RankingListStyle = styled.div`
    margin: auto;
    width: 1280px;
    .commentbox {
        background-color: #d9d9d9;
        padding: 15px;
    }
    .title {
        width: 90%;
        margin: auto;
        display: flex;
        .ranking {
            width: 9%;
            text-align: center;
        }
        .img {
            width: 9%;
        }
        .nickname {
            width: 50%;
        }
        .score {
            width: 25%;
            text-align: center;
        }
    }
`;

const RankingList = ({ data }) => {
    return (
        <RankingListStyle>
            <div className="commentbox">
                <div className="title">
                    <p className="ranking">Ranking</p>
                    <p className="img" />
                    <p className="nickname">Nickname</p>
                    <p className="score">Score</p>
                </div>
                {data.map((item) => (
                    <RankingItem key={item.resultId} item={item} />
                ))}
            </div>
        </RankingListStyle>
    );
};

export default RankingList;
