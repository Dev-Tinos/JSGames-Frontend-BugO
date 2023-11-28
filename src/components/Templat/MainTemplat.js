import React from "react";
import TopNavigationBar from "../organisms/TopNavigationBar";
import GameList from "../organisms/GameList";

const MainTemplat = ({ data, isLoading, loaderRef }) => {
    return (
        <div>
            <TopNavigationBar />
            <GameList data={data} isLoading={isLoading} />
            <div ref={loaderRef}>Loading</div>
        </div>
    );
};

export default MainTemplat;
