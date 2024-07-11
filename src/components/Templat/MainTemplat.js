import React from "react";
import TopNavigationBar from "../organisms/TopNavigationBar";
import GameList from "../organisms/GameList";
import Footer from "../organisms/Footer";

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
            <Footer />
        </div>
    );
};

export default MainTemplat;
