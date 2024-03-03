import React from "react";
import styled from "styled-components";

const NavStyle = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    li {
        display: inline;
        margin: 20px;
        cursor: pointer;
    }
    .clicked {
        color: blue;
    }
`;

const list = [
    { type: 0, text: "친구 목록" },
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
