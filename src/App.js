import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Ranking from "./pages/Ranking.js";
import Signin from "./pages/Signin.js";
import MyPage from "./pages/MyPage.js";

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
