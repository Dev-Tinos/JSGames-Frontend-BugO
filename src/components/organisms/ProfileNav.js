import React from "react";
import styled from "styled-components";

const ProfileNavStyle = styled.div`
    width: 1280px;
    margin: auto;
    ul {
        justify-content: center;
        display: flex;
        padding: 0px;
        li {
            list-style-type: none;
            font-size: 30px;
            padding: 10px;
            cursor: pointer;
        }
        .clicked {
            list-style-type: none;
            font-size: 30px;
            padding: 10px;
            color: #4249e5;
            font-weight: bold;
            cursor: pointer;
        }
    }
`;

const ProfileNav = ({ setType, type }) => {
    const list = [
        { type: "history", text: "기록" },
        { type: "ranking", text: "랭킹" },
    ];

    return (
        <ProfileNavStyle>
            <ul>
                {list.map((item) => (
                    <li
                        onClick={() => {
                            setType(item.type);
                        }}
                        className={item.type === type ? "clicked" : null}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </ProfileNavStyle>
    );
};

export default ProfileNav;
