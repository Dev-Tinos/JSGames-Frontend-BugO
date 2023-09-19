import React from "react";
import { Link } from "react-router-dom";
import "./TopNavigationBar.css";
import SearchBar from "../molecules/SearchBar";

const TopNavigationBar = () => {
    return (
        <div className="top-nav-bar">
            <h1 className="logo">
                <img
                    className="logo-img"
                    src="assets/img/tino.png"
                    alt="티노"
                />
            </h1>
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
            <SearchBar />
        </div>
    );
};

export default TopNavigationBar;
