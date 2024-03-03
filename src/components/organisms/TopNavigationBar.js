import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../atoms/Logo";
import styled from "styled-components";
import ProfileImg from "../atoms/ProfileImg";

const TopBar = styled.div`
    background-color: #5383e8;
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
    .nav-link-activev {
        color: #fff;
    }
    .nav-link {
        /* color: #fff; */
    }
    a {
        color: #b3cdff;
        text-decoration: none;
        width: auto;
        font-size: 22px;
        font-weight: bold;
        margin-left: 15px;
    }
    a:hover {
        color: #fff;
    }
    .leftMenu {
        display: flex;
        /* width: 200px; */
        .button {
            margin: auto;
            background-color: #5383e8;
            color: white;
            text-decoration: none;
            width: 100px;
            display: block;
            text-align: center;
            margin-left: 10px;
            border: 0px;
            font-size: 18px;
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
                <Link to="/">
                    <Logo />
                </Link>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "nav-link-active" : "nav-link"
                    }
                >
                    홈
                </NavLink>
                <Link
                    to="/ranking"
                    className={({ isActive }) =>
                        isActive ? "nav-link-active" : "nav-link"
                    }
                >
                    랭킹
                </Link>
                <div className="space" />
                {userId === null ? (
                    <div className="leftMenu">
                        <Link to="/login" className="button">
                            로그인
                        </Link>
                    </div>
                ) : (
                    <div className="leftMenu">
                        <button className="button">
                            <i class="fa-solid fa-users"></i>
                        </button>
                        <Link to="/mypage">
                            <ProfileImg />
                        </Link>
                        <button className="button" onClick={LogOut}>
                            로그아웃
                        </button>
                    </div>
                )}
            </div>
        </TopBar>
    );
};

export default TopNavigationBar;
