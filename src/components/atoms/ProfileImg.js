import React from "react";
import styled from "styled-components";
import defaultImg from "../../assets/img/tino.png";

const ProfileImgStyle = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    overflow: hidden;
    .roundimg {
        background-color: #fff;
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
    const imageSrc = isValidHttpUrl(img) ? img : defaultImg;

    return (
        <ProfileImgStyle>
            <img className="roundimg" src={imageSrc} alt="티노" />
        </ProfileImgStyle>
    );
};

export default ProfileImg;
