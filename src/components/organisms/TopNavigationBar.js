import React from "react";
import { Link } from "react-router-dom";
import "./TopNavigationBar.css";
import Logo from "../atoms/Logo";

const TopNavigationBar = () => {
    return (
        <div className="top-nav-bar">
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
        </div>
    );
};

export default TopNavigationBar;
