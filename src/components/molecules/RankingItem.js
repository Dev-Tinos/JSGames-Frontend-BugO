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

const MajorImg = [
    {
        major: "소프트웨어학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_5.jpg",
    },
    {
        major: "컴퓨터공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_5.jpg",
    },
    {
        major: "인공지능학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_14.jpg",
    },
    {
        major: "게임공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_6.jpg",
    },
    {
        major: "산업경영학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_10.jpg",
    },
    {
        major: "IT경영학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_10.jpg",
    },
    {
        major: "데이터사이언스경영학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_10.jpg",
    },
    {
        major: "글로벌융합공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_13.jpg",
    },
    {
        major: "기계공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_1.jpg",
    },
    {
        major: "기계설계공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_2.jpg",
    },
    {
        major: "나노반도체공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_11.jpg",
    },
    {
        major: "메카트로닉스학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_3.jpg",
    },
    {
        major: "AI로봇학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_3.jpg",
    },
    {
        major: "산업디자인공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_9.jpg",
    },
    {
        major: "미디어디자인학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_9.jpg",
    },
    {
        major: "생명화학공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_8.jpg",
    },
    {
        major: "신소재공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_7.jpg",
    },
    {
        major: "에너지전기공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_12.jpg",
    },
    {
        major: "지식융합학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_13.jpg",
    },
    {
        major: "전자공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_4.jpg",
    },
    {
        major: "임베디드시스템학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_4.jpg",
    },
];

const RankingItem = ({ item, ranking, type }) => {
    const onChangeRanking = () => {
        switch (type) {
            case 1:
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
            case 2:
                return (
                    <RankingItemStyle>
                        <p className="ranking">{item.totalRank}</p>
                        <div className="imgbox">
                            <img
                                src={
                                    MajorImg.find((i) => i.major === item.major)
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
                return <RankingItemStyle></RankingItemStyle>;
            default:
                return (
                    <RankingItemStyle>
                        <p className="ranking">{ranking}</p>
                        <div className="imgbox">
                            <img src={item.gameImage} alt={`${item.userId}`} />
                        </div>
                        <p className="name">{item.gameName}</p>
                        <p className="score">{item.viewCount}</p>
                    </RankingItemStyle>
                );
        }
    };
    return onChangeRanking();
};

export default RankingItem;
