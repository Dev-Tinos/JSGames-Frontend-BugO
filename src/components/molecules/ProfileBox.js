import React from "react";
import styled from "styled-components";
import ProfileImg from "../atoms/ProfileImg";
import { useNavigate } from "react-router-dom";

const ProfileBoxStyle = styled.div`
    display: flex;
    width: 1280px;
    height: auto;
    margin: 50px auto;
    .img {
        width: 300px;
        height: 300px;
    }
    .roundimg {
        width: 100%;
        height: 100%;
        box-shadow: 0 0 0 2px inset #cccccc;
    }
    .textbox {
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        margin-left: 50px;
    }
    .title {
        display: flex;
        align-items: center;
        font-size: 40px;
        margin-bottom: 10px;
        font-weight: bold;
        i {
            font-size: 30px;
        }
    }
    .text {
        font-size: 30px;
        margin: 0;
    }
    button {
        font-size: 25px;
        background-color: #fff;
        margin-left: 10px;
        border: 0;
        cursor: pointer;
    }
    .logOut {
        display: flex;
        flex: 1;
        justify-content: end;
        align-items: center;
        padding: 20px;
        button {
            font-family: "SUIT-Regular", sans-serif;
            font-size: 30px;
            font-weight: 700;
            padding: 10px;
            color: #5383e8;
        }
    }
`;

const ProfileBox = ({ data, onClicked }) => {
    const navigate = useNavigate();

    const LogOut = () => {
        localStorage.removeItem("userId");
        navigate("/");
    };

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
            <div className="logOut">
                <button onClick={() => LogOut()}>로그아웃</button>
            </div>
        </ProfileBoxStyle>
    );
};

export default ProfileBox;
