import React from "react";
import styled from "styled-components";

const RankingItemStyle = styled.div`
    align-items: center;
    background-color: #fff;
    width: 90%;
    margin: auto;
    display: flex;
    margin-top: 5px;
    box-shadow: 0 0 0 2px #ccc;
    border-radius: 5px;

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

const RankingItem = ({ item, ranking, type }) => {
    return (
        <RankingItemStyle>
            <p className="ranking">{ranking}</p>
            <div className="imgbox">
                {/* <img src={item.imageUrl} alt={`${item.userId}`} /> */}
                <img
                    src={require("../../assets/img/tino.png")}
                    alt={`${item.userId}`}
                />
            </div>
            <p className="name">
                {type === 0 ? item.gameName : item.user.nickname}
            </p>
            <p className="score">
                {type === 0 ? item.viewCount : item.rankWeight}
            </p>
        </RankingItemStyle>
    );
};

export default RankingItem;
