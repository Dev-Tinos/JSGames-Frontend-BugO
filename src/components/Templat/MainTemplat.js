import React from "react";
import TopNavigationBar from "../organisms/TopNavigationBar";
import GameList from "../organisms/GameList";

const testData = [
    {
        gameId: 1,
        gameName: "game1",
        userId: "개발자 1",
        imageUrl: "../../assets/img/tino.png",
        gameUrl: "String",
        description: "동해물과 백두산이",
    },
    {
        gameId: 2,
        gameName: "game2",
        userId: "개발자 2",
        imageUrl: "../../assets/img/tino.png",
        gameUrl: "String",
        description: "동해물과 백두산이",
    },
    {
        gameId: 3,
        gameName: "game3",
        userId: "개발자 3",
        imageUrl: "../../assets/img/tino.png",
        gameUrl: "String",
        description: "동해물과 백두산이",
    },
    {
        gameId: 4,
        gameName: "game4",
        userId: "개발자 4",
        imageUrl: "../../assets/img/tino.png",
        gameUrl: "String",
        description: "동해물과 백두산이",
    },
];

const MainTemplat = () => {
    return (
        <div>
            <TopNavigationBar />
            <GameList data={testData} />
        </div>
    );
};

export default MainTemplat;
