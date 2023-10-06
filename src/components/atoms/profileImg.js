import React from "react";
import styled from "styled-components";

const ProfileImgStyle = styled.div`
    .roundimg {
        background-color: #ccc;
        border-radius: 50%;
    }
`;

const ProfileImg = () => {
    return (
        <ProfileImgStyle>
            <img
                className="roundimg"
                src={require("../../assets/img/tino.png")}
                alt="티노"
            />
        </ProfileImgStyle>
    );
};

export default ProfileImg;
