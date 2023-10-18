import React from "react";
import styled from "styled-components";
import TopNavigationBar from "../organisms/TopNavigationBar";
import ProfileBox from "../molecules/ProfileBox";
import ProfileNav from "../organisms/ProfileNav";
import UserRanking from "../organisms/UserRanking";
import UserHistory from "../organisms/UserHistory";

const MyTemplatStyle = styled.div``;

const MyTemplat = ({ user, type, setType, historyData, rankingData }) => {
    return (
        <MyTemplatStyle>
            <TopNavigationBar />
            <ProfileBox data={user} />
            <ProfileNav setType={setType} type={type} />
            {type === "ranking" ? (
                <UserRanking data={rankingData} />
            ) : (
                <UserHistory data={historyData} />
            )}
        </MyTemplatStyle>
    );
};

export default MyTemplat;
