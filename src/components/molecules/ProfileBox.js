import React from "react";
import styled from "styled-components";
import ProfileImg from "../atoms/ProfileImg";

const ProfileBoxStyle = styled.div`
    display: flex;
    width: 1280px;
    margin: auto;
    .roundimg {
        width: 250px;
        height: 250px;
        margin: 30px;
    }
    .textbox {
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 50px;
    }
    .title {
        font-size: 30px;
        margin-bottom: 10px;
        font-weight: bold;
    }
    .text {
        font-size: 20px;
        margin-top: 0px;
        margin-bottom: 5px;
    }
`;

const ProfileBox = ({ data }) => {
    return (
        <ProfileBoxStyle>
            <ProfileImg />
            <div className="textbox">
                <p className="title">{data.nickname}</p>
                <p className="text">{data.email}</p>
                <p className="text">{data.major}</p>
            </div>
        </ProfileBoxStyle>
    );
};

export default ProfileBox;
