import React from "react";
import styled from "styled-components";
import HistoryItem from "../atoms/HistoryItem";

const DivBox = styled.div`
    margin: auto;
    width: 1280px;
    .title {
        width: 90%;
        display: flex;
        margin: auto;
        .game {
            width: 30%;
            text-align: center;
        }
        .score {
            width: 70%;
            text-align: center;
        }
    }
`;

const UserHistory = ({ data }) => {
    return (
        <DivBox>
            <div className="title">
                <p className="game">게임</p>
                <p className="score">점수</p>
            </div>
            {data !== null
                ? data.map((item) => (
                      <HistoryItem key={item.resultId} data={item} />
                  ))
                : null}
        </DivBox>
    );
};

export default UserHistory;
