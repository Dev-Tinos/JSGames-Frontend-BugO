import React, { useState } from "react";
import styled from "styled-components";
import TopNavigationBar from "../organisms/TopNavigationBar";
import ProfileBox from "../molecules/ProfileBox";
import ProfileNav from "../organisms/ProfileNav";
import UserRanking from "../organisms/UserRanking";
import UserHistory from "../organisms/UserHistory";
import EditInfoForm from "../molecules/EditInfoForm";

const MyTemplatStyle = styled.div``;

const MyTemplat = ({ user, type, setType, historyData, rankingData }) => {
    const [edit, setEdit] = useState(false);
    const onClicked = () => {
        if (edit === true) {
            setEdit(false);
        } else {
            setEdit(true);
        }
    };
    return (
        <MyTemplatStyle>
            <TopNavigationBar />
            <ProfileBox data={user} onClicked={onClicked} />
            {edit === true ? <EditInfoForm onClicked={onClicked} /> : null}
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
