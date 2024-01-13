import React from "react";
import TopNavigationBar from "../organisms/TopNavigationBar";
import RankingList from "../organisms/RankingList";
import styled from "styled-components";
import RankingNav from "../organisms/RankingNav";

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

const RankingTemplat = ({
    type,
    setType,
    loaderRef,
    userRanking,
    gameRanking,
    majorRanking,
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
                        <RankingList data={majorRanking} type={2} />
                    </div>
                );
            case 3:
                return (
                    <div className="rankingBox">
                        <RankingList data={null} type={3} />
                    </div>
                );
            default:
                return (
                    <div className="rankingBox">
                        <RankingList data={gameRanking} type={0} />
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
