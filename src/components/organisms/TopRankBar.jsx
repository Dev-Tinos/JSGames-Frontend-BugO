import React from "react";
import styled from "styled-components";

const BarStyle = styled.div`
    margin: 10px;
    .select {
        color: blue;
        font-weight: bold;
    }
    li {
        font-size: 18px;
        float: left;
        list-style-type: none;
        margin: 10px 20px;
        cursor: pointer;
    }
`;

const TopRankBar = ({ items, setItem, item }) => {
    return (
        <BarStyle>
            {items.map((i) => (
                <div
                    onClick={() => setItem(i.value)}
                    key={i.value}
                    className={i.value === item ? "select" : null}
                >
                    <li>{i.name}</li>
                </div>
            ))}
        </BarStyle>
    );
};

export default TopRankBar;
