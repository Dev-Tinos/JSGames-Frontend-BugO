import React from "react";
import TopNavigationBar from "../organisms/TopNavigationBar";
import GameList from "../organisms/GameList";

const MainTemplat = ({ data }) => {
    return (
        <div>
            <TopNavigationBar />
            <GameList data={data} />
        </div>
    );
};

export default MainTemplat;
