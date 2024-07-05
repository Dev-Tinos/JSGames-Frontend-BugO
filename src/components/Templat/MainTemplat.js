import React from "react";
import TopNavigationBar from "../organisms/TopNavigationBar";
import GameList from "../organisms/GameList";

const MainTemplat = ({ data, isLoading, loaderRef, gameSort, setGameSort }) => {
    return (
        <div>
            <TopNavigationBar />
            <GameList
                data={data}
                isLoading={isLoading}
                setGameSort={setGameSort}
                gameSort={gameSort}
            />
            <div ref={loaderRef} />
        </div>
    );
};

export default MainTemplat;
