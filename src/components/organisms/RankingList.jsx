import React from "react";
import styled from "styled-components";
import RankingItem from "../molecules/RankingItem";

const RankingListStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    min-width: 700px;
    margin: 15px;
    .commentbox {
        background-color: #fff;
    }
    .title {
        width: 90%;
        margin: auto;
        display: flex;
        border-bottom: 2px solid #ccc;
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

const RankingList = ({ data, type, MajorImg, gameSort, SORT }) => {
    const onChangeRanking = () => {
        switch (type) {
            case 1:
                return (
                    <div className="title">
                        <p className="ranking">랭킹</p>
                        <p className="img" />
                        <p className="nickname">닉네임</p>
                        <p className="score">점수</p>
                    </div>
                );
            case 2:
                return (
                    <div className="title">
                        <p className="ranking">랭킹</p>
                        <p className="img" />
                        <p className="nickname">학과</p>
                        <p className="score">점수</p>
                    </div>
                );
            case 3:
                return (
                    <div className="title">
                        <p className="ranking">랭킹</p>
                        <p className="img" />
                        <p className="nickname">닉네임</p>
                        <p className="score">점수</p>
                    </div>
                );
            default:
                return (
                    <div className="title">
                        <p className="ranking">랭킹</p>
                        <p className="img" />
                        <p className="nickname">게임 이름</p>
                        <p className="score">
                            {SORT.find((i) => i.value === gameSort).text}
                        </p>
                    </div>
                );
        }
    };
    return (
        <RankingListStyle>
            <div className="commentbox">
                {onChangeRanking()}
                {data.length === 0 ? (
                    <div>데이터가 없습니다</div>
                ) : (
                    data.map((item, i) => (
                        <RankingItem
                            key={item.resultId}
                            item={item}
                            ranking={i + 1}
                            type={type}
                            MajorImg={MajorImg}
                            gameSort={gameSort}
                        />
                    ))
                )}
            </div>
        </RankingListStyle>
    );
};

export default RankingList;
