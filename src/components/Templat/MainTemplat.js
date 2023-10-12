import React from "react";
import TopNavigationBar from "../organisms/TopNavigationBar";
import GameList from "../organisms/GameList";

const MainTemplat = ({ data, isLoading }) => {
    return (
        <div>
            <TopNavigationBar />
            <GameList data={data} isLoading={isLoading} />
        </div>
    );
};

export default MainTemplat;
