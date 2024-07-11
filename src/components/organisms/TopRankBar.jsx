import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const BarStyle = styled.div`
    width: 100%;
    min-width: 600px;
    display: flex;
    justify-content: center;
    position: relative;
    ul {
        display: flex;
        margin: 15px -10% 0 64px;
        padding: 0 200px 5px 0;
        width: 90%;
        min-width: 600px;
        height: auto;
        align-items: center;
        justify-content: left;
        overflow: scroll;
        gap: 10px;
        &::-webkit-scrollbar {
            height: 5px;
            margin-top: 10px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #efefef;
            border-radius: 10px;
        }
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
    const useHorizontalScroll = () => {
        const elRef = useRef();
        useEffect(() => {
            const el = elRef.current;
            if (el) {
                const onWheel = (e) => {
                    if (e.deltaY === 0) return;
                    e.preventDefault();
                    el.scrollTo({
                        left: el.scrollLeft + e.deltaY,
                        behavior: "smooth",
                    });
                };
                el.addEventListener("wheel", onWheel);
                return () => el.removeEventListener("wheel", onWheel);
            }
        }, []);
        return elRef;
    };
    return (
        <BarStyle>
            <ul ref={useHorizontalScroll()}>
                {items.map((i) => (
                    <li
                        onClick={() => setItem(i.value)}
                        key={i.value}
                        className={i.value === item ? "active" : null}
                    >
                        {i.name}
                    </li>
                ))}
            </ul>
        </BarStyle>
    );
};

export default TopRankBar;
