import React from "react";
import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";
import styled from "styled-components";
import ProfileImg from "../atoms/ProfileImg";

const TopBar = styled.div`
    background-color: #d9d9d9;
    display: flex;
    align-items: center;
    height: 80px;
    .space {
        flex: 1;
    }
    .roundimg {
        width: 50px;
    }
    li {
        list-style-type: none;
        text-decoration: none;
        margin: auto;
        a {
            margin: auto;
            background-color: #4249e5;
            color: white;
            text-decoration: none;
            width: 100px;
            display: block;
            border-radius: 10px;
            text-align: center;
            padding: 10px;
            margin-left: 10px;
        }
    }
    .rightMenu {
        display: flex;
        width: 240px;
    }
    .leftMenu {
        display: flex;
        width: 200px;
    }
`;

const TopNavigationBar = () => {
    return (
        <TopBar className="top-nav-bar">
            <Logo />
            <div className="rightMenu">
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/ranking">랭킹</Link>
                </li>
            </div>
            <div className="space" />
            <div className="leftMenu">
                <Link to="/mypage">
                    <ProfileImg />
                </Link>

                <li>
                    <Link to="/login">로그인</Link>
                </li>
            </div>
        </TopBar>
    );
};

export default TopNavigationBar;
