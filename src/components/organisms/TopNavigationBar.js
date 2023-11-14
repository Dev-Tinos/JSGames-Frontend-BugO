import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../atoms/Logo";
import styled from "styled-components";
import ProfileImg from "../atoms/ProfileImg";

const TopBar = styled.div`
    background-color: #d9d9d9;
    height: 80px;
    .nav {
        height: 80px;
        width: 1280px;
        display: flex;
        align-items: center;
        margin: auto;
    }
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
        button {
            margin: auto;
            background-color: #8a8fff;
            color: white;
            text-decoration: none;
            width: 100px;
            display: block;
            border-radius: 10px;
            text-align: center;
            padding: 10px;
            margin-left: 10px;
            border: 0px;
        }
    }
`;

const TopNavigationBar = () => {
    const [userId, setUserId] = useState(null);
    const navigate = useNavigate();

    const LogOut = () => {
        localStorage.removeItem("userId");
        setUserId(null);
        navigate("/");
    };

    useEffect(() => {
        setUserId(localStorage.getItem("userId"));
    }, [userId]);

    return (
        <TopBar className="top-nav-bar">
            <div className="nav">
                {" "}
                <Link to={"/"}>
                    <Logo />
                </Link>
                <div className="rightMenu">
                    <li>
                        <Link to="/">홈</Link>
                    </li>
                    <li>
                        <Link to="/ranking">랭킹</Link>
                    </li>
                </div>
                <div className="space" />
                {userId === null ? (
                    <div>
                        <li>
                            <Link to="/login">로그인</Link>
                        </li>
                    </div>
                ) : (
                    <div className="leftMenu">
                        <Link to="/mypage">
                            <ProfileImg />
                        </Link>
                        <button onClick={LogOut}>로그아웃</button>
                    </div>
                )}
            </div>
        </TopBar>
    );
};

export default TopNavigationBar;
