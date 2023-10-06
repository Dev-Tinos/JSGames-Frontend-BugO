import React from "react";
import styled from "styled-components";
import TopNavigationBar from "../organisms/TopNavigationBar";
import ProfileBox from "../molecules/ProfileBox";
import ProfileNav from "../organisms/ProfileNav";

const MyTemplatStyle = styled.div``;

const MyTemplat = () => {
    return (
        <MyTemplatStyle>
            <TopNavigationBar />
            <ProfileBox />
            <ProfileNav />
        </MyTemplatStyle>
    );
};

export default MyTemplat;
