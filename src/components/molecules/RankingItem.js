import React, { useState } from "react";
import styled from "styled-components";

const RankingItemStyle = styled.div`
    align-items: center;
    background-color: #fff;
    width: 90%;
    margin: auto;
    display: flex;
    margin-top: 5px;
    border-bottom: 2px solid #ccc;
    font-weight: 600;

    .ranking {
        font-size: 24px;
        font-weight: bold;
        width: 8%;
        text-align: center;
    }
    .imgbox {
        width: 10%;
        height: 60px;
        img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            box-shadow: 0 0 0 1px #ccc;
        }
    }
    .name {
        width: 50%;
    }
    .score {
        text-align: center;
        width: 25%;
    }
`;

const formatDate = (dateObj) => {
    const date = new Date(dateObj);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
};

const RankingItem = ({ item, ranking, type, MajorImg, gameSort }) => {
    const [imgError, setImgError] = useState(false);

    const onChangeRanking = () => {
        switch (type) {
            case 1:
                return (
                    <RankingItemStyle>
                        <p className="ranking">{item.totalRank}</p>
                        <div className="imgbox">
                            <img
                                src={
                                    imgError
                                        ? require("../../assets/img/tino.png")
                                        : item.user.profileImageURL
                                }
                                onError={() => setImgError(true)}
                                alt={`${item.userId}`}
                            />
                        </div>
                        <p className="name">{item.user.nickname}</p>
                        <p className="score">{item.rankWeight}</p>
                    </RankingItemStyle>
                );
            case 2:
                return (
                    <RankingItemStyle>
                        <p className="ranking">{item.totalRank}</p>
                        <div className="imgbox">
                            <img
                                src={
                                    MajorImg.find((i) => i.value === item.major)
                                        .url
                                }
                                alt={`${item.userId}`}
                            />
                        </div>
                        <p className="name">{item.major}</p>
                        <p className="score">{item.rankWeight}</p>
                    </RankingItemStyle>
                );
            case 3:
                return (
                    <RankingItemStyle>
                        <p className="ranking">{item.totalRank}</p>
                        <div className="imgbox">
                            <img
                                src={require("../../assets/img/tino.png")}
                                alt={`${item.userId}`}
                            />
                        </div>
                        <p className="name">{item.user.nickname}</p>
                        <p className="score">{item.rankWeight}</p>
                    </RankingItemStyle>
                );
            default:
                return (
                    <RankingItemStyle>
                        <p className="ranking">{ranking}</p>
                        <div className="imgbox">
                            <img src={item.gameImage} alt={`${item.userId}`} />
                        </div>
                        <p className="name">{item.gameName}</p>
                        {gameSort === "VIEW_COUNT" ? (
                            <p className="score">{item.viewCount}</p>
                        ) : gameSort === "RECENT" ? (
                            <p className="score">
                                {formatDate(item.createdAt)}
                            </p>
                        ) : null}
                    </RankingItemStyle>
                );
        }
    };
    return onChangeRanking();
};

export default RankingItem;
