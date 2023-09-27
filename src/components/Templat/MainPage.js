import React from "react";
import TopNavigationBar from "../organisms/TopNavigationBar";
import GameList from "../organisms/GameList";

const testData = [
    {
        id: 1,
        title: "game1",
        developer: "개발자1",
        img: "assets/img/tino.png",
    },
    {
        id: 2,
        title: "game2",
        developer: "개발자2",
        img: "assets/img/tino.png",
    },
    {
        id: 3,
        title: "game3",
        developer: "개발자3",
        img: "assets/img/tino.png",
    },
    {
        id: 4,
        title: "game4",
        developer: "개발자4",
        img: "assets/img/tino.png",
    },
];

const MainPage = () => {
    return (
        <div>
            <TopNavigationBar />
            <GameList data={testData} />
        </div>
    );
};

export default MainPage;
