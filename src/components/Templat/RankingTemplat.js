import React from "react";
import TopNavigationBar from "../organisms/TopNavigationBar";
import RankingList from "../organisms/RankingList";
import styled from "styled-components";
import RankingNav from "../organisms/RankingNav";
import MajorSelect from "../atoms/MajorSelect";
import SortSelect from "../atoms/SortSelect";

const RankingStyle = styled.div`
    .commentbox {
        width: 1040px;
        height: auto;
        overflow: hidden;
    }
    .container {
        display: flex;
        margin: auto;
    }
    .commentbox {
        background-color: #fff;
        margin: auto;
    }
    .space {
        width: 270px;
        padding: 15px;
    }
    .rankingBox {
        flex: 1;
    }
`;

const MajorImg = [
    {
        value: "소프트웨어학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_5.jpg",
    },
    {
        value: "컴퓨터공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_5.jpg",
    },
    {
        value: "인공지능학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_14.jpg",
    },
    {
        value: "게임공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_6.jpg",
    },
    {
        value: "산업경영학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_10.jpg",
    },
    {
        value: "IT경영학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_10.jpg",
    },
    {
        value: "데이터사이언스경영학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_10.jpg",
    },
    {
        value: "글로벌융합공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_13.jpg",
    },
    {
        value: "기계공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_1.jpg",
    },
    {
        value: "기계설계공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_2.jpg",
    },
    {
        value: "나노반도체공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_11.jpg",
    },
    {
        value: "메카트로닉스학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_3.jpg",
    },
    {
        value: "AI로봇학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_3.jpg",
    },
    {
        value: "산업디자인공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_9.jpg",
    },
    {
        value: "미디어디자인학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_9.jpg",
    },
    {
        value: "생명화학공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_8.jpg",
    },
    {
        value: "신소재공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_7.jpg",
    },
    {
        value: "에너지전기공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_12.jpg",
    },
    {
        value: "지식융합학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_13.jpg",
    },
    {
        value: "전자공학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_4.jpg",
    },
    {
        value: "임베디드시스템학과",
        url: "https://www.tukorea.ac.kr/sites/tukorea/images/sub/depart_4.jpg",
    },
];

const SORT = [
    { value: "VIEW_COUNT", name: "조회 수 높은 순", text: "조회 수" },
    { value: "LOG_COUNT", name: "로그 많은 순", text: "" },
    { value: "RECENT", name: "최신순", text: "등록 일자" },
    { value: "REVIEW_COUNT", name: "리뷰 많은 순", text: "" },
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
                        <MajorSelect
                            item={MajorImg}
                            setMajor={setMajor}
                        ></MajorSelect>
                        <RankingList data={majorUserRanking} type={3} />
                    </div>
                );
            default:
                return (
                    <div className="rankingBox">
                        <SortSelect item={SORT} setSort={setGameSort} />
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
                <div className="space" />
            </div>
            <div ref={loaderRef} />
        </RankingStyle>
    );
};

export default RankingTemplat;
