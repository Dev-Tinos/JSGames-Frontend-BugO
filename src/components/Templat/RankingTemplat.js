import React from "react";
import TopNavigationBar from "../organisms/TopNavigationBar";
import RankingList from "../organisms/RankingList";
import styled from "styled-components";
import RankingNav from "../organisms/RankingNav";
import UserRankingList from "../organisms/UserRankingList";

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

const RankingTemplat = ({ data, page, size, type, setType }) => {
    const changeRaningPage = () => {
        switch (type) {
            case 0:
                return (
                    <div className="rankingBox">
                        <RankingList data={data} page={page} size={size} />
                    </div>
                );
            default:
                return (
                    <div className="rankingBox">
                        <UserRankingList data={data} page={page} size={size} />
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
        </RankingStyle>
    );
};

export default RankingTemplat;
