import React from "react";
import TopNavigationBar from "../organisms/TopNavigationBar";
import styled from "styled-components";

const Detailbox = styled.div`
    .gameScreen {
        width: 1280px;
        height: 800px;
        background-color: #d9d9d9;
        margin: auto;
    }
`;

const GameDetail = () => {
    return (
        <Detailbox>
            <TopNavigationBar />
            <h1>게임 페이지</h1>
            <div className="gameScreen">게임화면</div>
            <p>게임 설명</p>
            <div></div>
        </Detailbox>
    );
};

export default GameDetail;
