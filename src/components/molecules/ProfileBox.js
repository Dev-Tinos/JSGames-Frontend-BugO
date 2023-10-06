import React from "react";
import styled from "styled-components";
import ProfileImg from "../atoms/profileImg";

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
    .name {
        font-size: 30px;
        margin-bottom: 0px;
        font-weight: bold;
    }
    .major {
        margin-top: 10px;
        font-size: 20px;
    }
`;

const ProfileBox = () => {
    return (
        <ProfileBoxStyle>
            <ProfileImg />
            <div className="textbox">
                <p className="name">Nickname</p>
                <p className="major">Major</p>
            </div>
        </ProfileBoxStyle>
    );
};

export default ProfileBox;
