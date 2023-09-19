import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Ranking from "./pages/ranking/Ranking.js";
import Signin from "./pages/signin/Signin.js";
import MyPage from "./pages/mypage/MyPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/ranking" Component={Ranking} />
            <Route path="/mypage" Component={MyPage} />
            <Route path="/signin" Component={Signin} />
        </Routes>
    );
};

export default App;
