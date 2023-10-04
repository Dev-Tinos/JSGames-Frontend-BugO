import React from "react";
import styled from "styled-components";
import RankingItem from "../molecules/RankingItem";

const RankingListStyle = styled.div`
    margin: auto;
    width: 1280px;
    .commentbox {
        background-color: #d9d9d9;
        padding: 15px;
    }
`;

const RankingList = ({ data }) => {
    return (
        <RankingListStyle>
            <div className="commentbox">
                {data.map((item) => (
                    <RankingItem key={item.resultId} item={item} />
                ))}
            </div>
        </RankingListStyle>
    );
};

export default RankingList;
