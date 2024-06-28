import React from "react";
import styled from "styled-components";

const ProfileImgStyle = styled.div`
    width: 64px;
    height: 64px;
    .roundimg {
        background-color: #fff;
        border-radius: 50%;
    }
`;

const ProfileImg = ({ img }) => {
    return (
        <ProfileImgStyle>
            <img
                className="roundimg"
                src={img || require("../../assets/img/tino.png")}
                alt="티노"
            />
        </ProfileImgStyle>
    );
};

export default ProfileImg;
