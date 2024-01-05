import React from "react";
import styled from "styled-components";
import HistoryItem from "../atoms/HistoryItem";
import { Link } from "react-router-dom";

const DivBox = styled.div`
    margin: auto;
    height: auto;
    width: 1280px;
    overflow: hidden;
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
            {data !== null
                ? data.map((item) => (
                      <Link to={`/game/${item.gameId}`}>
                          <HistoryItem key={item.gameId} data={item} />
                      </Link>
                  ))
                : null}
        </DivBox>
    );
};

export default UserHistory;
