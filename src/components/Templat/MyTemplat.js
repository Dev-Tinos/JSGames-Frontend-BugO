import React, { useState } from "react";
import styled from "styled-components";
import TopNavigationBar from "../organisms/TopNavigationBar";
import ProfileBox from "../molecules/ProfileBox";
import UserHistory from "../organisms/UserHistory";
import EditInfoForm from "../molecules/EditInfoForm";

const MyTemplatStyle = styled.div``;

const MyTemplat = ({ user, historyData }) => {
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
            {edit === true ? (
                <EditInfoForm user={user} onClicked={onClicked} />
            ) : null}
            <UserHistory data={historyData} />
        </MyTemplatStyle>
    );
};

export default MyTemplat;
