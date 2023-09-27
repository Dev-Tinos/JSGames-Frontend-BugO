import React from "react";
import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";
import styled from "styled-components";

const TopBar = styled.div`
    background-color: #d9d9d9;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    height: 80px;

    .nav-links {
        display: flex;
        list-style-type: none;
    }

    .nav-links a {
        color: white;
        text-decoration: none;
        background-color: #4249e5;
        display: block;
        width: 100px;
        padding: 10px;
        border-radius: 10px;
        text-align: center;
        margin: 5px;
    }
`;

const TopNavigationBar = () => {
    return (
        <TopBar className="top-nav-bar">
            <Logo />
            <div className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/ranking">Ranking</Link>
                </li>
                <li>
                    <Link to="/mypage">My</Link>
                </li>
                <li>
                    <Link to="/signin">Login</Link>
                </li>
            </div>
        </TopBar>
    );
};

export default TopNavigationBar;
