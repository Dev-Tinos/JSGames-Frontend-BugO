import React from "react";
import styled from "styled-components";
import ProfileImg from "../atoms/ProfileImg";

const ProfileBoxStyle = styled.div`
    /* float: left; */
    display: flex;
    width: 1280px;
    height: auto;
    margin: auto;
    .img {
        width: 300px;
        height: 300px;
    }
    .roundimg {
        width: 250px;
        height: 250px;
        margin: 30px;
        box-shadow: 0 0 0 2px inset #cccccc;
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
    button {
        width: 34px;
        height: 34px;
        font-size: 20px;
        background-color: #fff;
        margin-left: 10px;
    }
    img {
    }
`;

const ProfileBox = ({ data, onClicked }) => {
    return (
        <ProfileBoxStyle>
            <div className="img">
                <ProfileImg img={data.profileImageURL} />
            </div>
            <div className="textbox">
                <p className="title">
                    {data.nickname || data.friendName}
                    <button onClick={onClicked}>
                        <i class="fa-solid fa-pencil"></i>
                    </button>
                </p>
                <p className="text">{data.email || data.friendEmail}</p>
                <p className="text">{data.major}</p>
            </div>
        </ProfileBoxStyle>
    );
};

export default ProfileBox;
