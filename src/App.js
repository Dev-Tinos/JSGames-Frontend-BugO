import React from "react";
import { Route, Routes } from "react-router-dom";
import Ranking from "./pages/Ranking.js";
import Login from "./pages/Login.js";
import MyPage from "./pages/MyPage.js";
import Main from "./pages/Main.js";

const App = () => {
    return (
        <Routes>
            <Route path="/" Component={Main} />
            <Route path="/ranking" Component={Ranking} />
            <Route path="/mypage" Component={MyPage} />
            <Route path="/signin" Component={Login} />
        </Routes>
    );
};

export default App;
