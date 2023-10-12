import React from "react";
import { Route, Routes } from "react-router-dom";
import Ranking from "./pages/Ranking.js";
import Login from "./pages/Login.js";
import MyPage from "./pages/MyPage.js";
import Main from "./pages/Main.js";
import GamePage from "./pages/GamePage.js";
import TestPage from "./pages/TestPage.js";
import SignUpPage from "./pages/SignUpPage.js";

const App = () => {
    return (
        <Routes>
            <Route path="/" Component={Main} />
            <Route path="/ranking" Component={Ranking} />
            <Route path="/mypage" Component={MyPage} />
            <Route path="/login" Component={Login} />
            <Route path="/signup" Component={SignUpPage} />
            <Route path="/game/:gameId" Component={GamePage} />
            <Route path="/test" Component={TestPage} />
        </Routes>
    );
};

export default App;
