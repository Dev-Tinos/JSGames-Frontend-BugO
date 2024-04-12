import React from "react";
import styled from "styled-components";

const NavStyle = styled.div`
    width: 600px;
    height: 34px;
    margin: auto;
    color: #999999;
    font-size: 18px;
    li {
        width: 200px;
        height: 34px;
        justify-content: center;
        display: inline-block;
        text-align: center;
        font-weight: bold;
        border-bottom: 2px #999999 solid;
        cursor: pointer;
    }
    .clicked {
        color: #333333;
        border-color: #333333;
    }
`;

const list = [
    { type: 0, text: "유저 목록" },
    { type: 1, text: "받은 요청" },
    { type: 2, text: "보낸 요청" },
];

const FriendNav = ({ type, setType }) => {
    return (
        <NavStyle>
            {list.map((item) => (
                <li
                    onClick={() => setType(item.type)}
                    className={item.type === type ? "clicked" : null}
                    key={item.type}
                >
                    {item.text}
                </li>
            ))}
        </NavStyle>
    );
};

export default FriendNav;
