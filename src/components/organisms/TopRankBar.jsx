import React from "react";
import styled from "styled-components";

const BarStyle = styled.ul`
    display: flex;
    margin: 15px 0;
    padding: 0 10px 20px;
    width: 1280px;
    height: auto;
    align-items: center;
    justify-content: left;
    overflow: scroll;
    gap: 10px;
    &::-webkit-scrollbar {
        width: 5px;
        height: 10px;
        margin-top: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #efefef;
        border-radius: 10px;
    }
    li {
        background-color: #efefef;
        display: inline-block;
        padding: 15px 20px;
        font-size: 18px;
        white-space: nowrap;
        list-style-type: none;
        border-radius: 20px;
        cursor: pointer;
        &.active {
            background-color: #5383e8;
            color: #ffffff;
            font-weight: bold;
        }
    }
`;

const TopRankBar = ({ items, setItem, item }) => {
    return (
        <BarStyle>
            {items.map((i) => (
                <li
                    onClick={() => setItem(i.value)}
                    key={i.value}
                    className={i.value === item ? "active" : null}
                >
                    {i.name}
                </li>
            ))}
        </BarStyle>
    );
};

export default TopRankBar;
