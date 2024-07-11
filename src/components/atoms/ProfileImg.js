import React from "react";
import styled from "styled-components";
import defaultImg from "../../assets/img/tino.png";

const ProfileImgStyle = styled.div`
    width: 64px;
    height: 64px;
    .roundimg {
        background-color: #fff;
        border-radius: 50%;
        object-fit: cover;
    }
`;

const isValidHttpUrl = (string) => {
    let url;
    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
};

const ProfileImg = ({ img }) => {
    const validSrc = isValidHttpUrl(img) ? img : defaultImg;

    return (
        <ProfileImgStyle>
            <img className="roundimg" src={validSrc} alt="티노" />
        </ProfileImgStyle>
    );
};

export default ProfileImg;
