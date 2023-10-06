import React from "react";
import styled from "styled-components";

const ProfileNavStyle = styled.div`
    width: 1280px;
    margin: auto;
    ul {
        justify-content: center;
        display: flex;
        li {
            list-style-type: none;
            font-size: 20px;
            padding: 10px;
            cursor: pointer;
        }
    }
`;

const ProfileNav = () => {
    const list = [
        { type: 1, text: "순위" },
        { type: 2, text: "기록" },
    ];

    return (
        <ProfileNavStyle>
            <ul>
                {list.map((item) => (
                    <li>{item.text}</li>
                ))}
            </ul>
        </ProfileNavStyle>
    );
};

export default ProfileNav;
