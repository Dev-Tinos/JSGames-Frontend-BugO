import React from "react";
import TopNavigationBar from "../organisms/TopNavigationBar";
import RankingList from "../organisms/RankingList";
import styled from "styled-components";
import RankingNav from "../organisms/RankingNav";
import TopRankBar from "../organisms/TopRankBar";
import Footer from "../organisms/Footer";

const RankingStyle = styled.div`
    .commentbox {
        width: auto;
        height: auto;
        overflow: hidden;
    }
    .container {
        display: flex;
        margin: auto;
        padding-right: 200px;
        min-height: 70dvb;
    }
    .commentbox {
        background-color: #fff;
    }
    .space {
        width: 270px;
        padding: 15px;
    }
    .rankingBox {
        width: 100%;
        min-width: 700px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-left: 2px solid #efefef;
    }
`;

const MajorImg = [
    {
        value: "소프트웨어학과",
        name: "소프트웨어학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_5.jpg",
    },
    {
        value: "컴퓨터공학과",
        name: "컴퓨터공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_5.jpg",
    },
    {
        value: "인공지능학과",
        name: "인공지능학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_14.jpg",
    },
    {
        value: "게임공학과",
        name: "게임공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_6.jpg",
    },
    {
        value: "산업경영학과",
        name: "산업경영학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_10.jpg",
    },
    {
        value: "IT경영학과",
        name: "IT경영학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_10.jpg",
    },
    {
        value: "데이터사이언스경영학과",
        name: "데이터사이언스경영학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_10.jpg",
    },
    {
        value: "글로벌융합공학과",
        name: "글로벌융합공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_13.jpg",
    },
    {
        value: "기계공학과",
        name: "기계공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_1.jpg",
    },
    {
        value: "기계설계공학과",
        name: "기계설계공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_2.jpg",
    },
    {
        value: "나노반도체공학과",
        name: "나노반도체공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_11.jpg",
    },
    {
        value: "메카트로닉스학과",
        name: "메카트로닉스학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_3.jpg",
    },
    {
        value: "AI로봇학과",
        name: "AI로봇학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_3.jpg",
    },
    {
        value: "산업디자인공학과",
        name: "산업디자인공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_9.jpg",
    },
    {
        value: "미디어디자인학과",
        name: "미디어디자인학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_9.jpg",
    },
    {
        value: "생명화학공학과",
        name: "생명화학공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_8.jpg",
    },
    {
        value: "신소재공학과",
        name: "신소재공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_7.jpg",
    },
    {
        value: "에너지전기공학과",
        name: "에너지전기공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_12.jpg",
    },
    {
        value: "지식융합학과",
        name: "지식융합학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_13.jpg",
    },
    {
        value: "전자공학과",
        name: "전자공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_4.jpg",
    },
    {
        value: "임베디드시스템학과",
        name: "임베디드시스템학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_4.jpg",
    },
];

const SORT = [
    { value: "VIEW_COUNT", name: "조회순", text: "조회 수" },
    { value: "LOG_COUNT", name: "인기순", text: "" },
    { value: "RECENT", name: "최신순", text: "등록 일자" },
    { value: "REVIEW_COUNT", name: "댓글순", text: "" },
];

const RankingTemplat = ({
    type,
    setType,
    loaderRef,
    userRanking,
    gameRanking,
    gameSort,
    setGameSort,
    majorRanking,
    majorUserRanking,
    setMajor,
    major,
}) => {
    const changeRaningPage = () => {
        switch (type) {
            case 1:
                return (
                    <div className="rankingBox">
                        <RankingList data={userRanking} type={1} />
                    </div>
                );
            case 2:
                return (
                    <div className="rankingBox">
                        <RankingList
                            data={majorRanking}
                            type={2}
                            MajorImg={MajorImg}
                        />
                    </div>
                );
            case 3:
                return (
                    <div className="rankingBox">
                        <TopRankBar
                            items={MajorImg}
                            setItem={setMajor}
                            item={major}
                        />
                        <RankingList data={majorUserRanking} type={3} />
                    </div>
                );
            default:
                return (
                    <div className="rankingBox">
                        <TopRankBar
                            items={SORT}
                            setItem={setGameSort}
                            item={gameSort}
                        />
                        <RankingList
                            data={gameRanking}
                            type={0}
                            gameSort={gameSort}
                            SORT={SORT}
                        />
                    </div>
                );
        }
    };
    return (
        <RankingStyle>
            <TopNavigationBar />
            <div className="container">
                <RankingNav setType={setType} type={type} />
                {changeRaningPage()}
            </div>
            <div ref={loaderRef} />
            <Footer />
        </RankingStyle>
    );
};

export default RankingTemplat;
