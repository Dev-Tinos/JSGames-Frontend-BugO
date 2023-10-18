import React from "react";
import styled from "styled-components";
import RankingItem from "../molecules/RankingItem";

const RankingListStyle = styled.div`
    margin: auto;
    width: 1280px;
    .commentbox {
        background-color: #fff;
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

const RankingList = ({ data, page, size }) => {
    return (
        <RankingListStyle>
            <div className="commentbox">
                <div className="title">
                    <p className="ranking">랭킹</p>
                    <p className="img" />
                    <p className="nickname">게임 이름</p>
                    <p className="score">조회수</p>
                </div>
                {data === null
                    ? null
                    : data.map((item, i) => (
                          <RankingItem
                              key={item.resultId}
                              item={item}
                              ranking={page * size + i + 1}
                          />
                      ))}
            </div>
        </RankingListStyle>
    );
};

export default RankingList;
