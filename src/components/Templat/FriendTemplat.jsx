import React from "react";
import FriendNav from "../organisms/FriendNav";
import styled from "styled-components";
import FriendList from "../organisms/FriendList";

const BoxStyle = styled.div`
    width: 800px;
    height: auto;
    border: 1px solid #000;
    display: block;

    .title {
        text-align: center;
        font-size: 18px;
    }
`;

const Friends = [
    {
        friendEmail: "이메일1",
        friendName: "친구1",
        friendProfile: "프로필1",
        parentMajor: "컴퓨터공학부",
        major: "소프트웨어학과",
        createdAt: "2024-03-03T07:29:13.035Z",
        recentPlay: "2024-03-03T07:29:13.035Z",
    },
    {
        friendEmail: "이메일2",
        friendName: "친구2",
        friendProfile: "프로필2",
        parentMajor: "컴퓨터공학부",
        major: "소프트웨어학과",
        createdAt: "2024-03-03T07:29:13.035Z",
        recentPlay: "2024-03-03T07:29:13.035Z",
    },
    {
        friendEmail: "이메일3",
        friendName: "친구3",
        friendProfile: "프로필3",
        parentMajor: "컴퓨터공학부",
        major: "소프트웨어학과",
        createdAt: "2024-03-03T07:29:13.035Z",
        recentPlay: "2024-03-03T07:29:13.035Z",
    },
];

const FriendTemplat = ({ type, setType }) => {
    return (
        <BoxStyle>
            <p className="title">
                <i class="fa-solid fa-users"></i>친구 모달
            </p>
            <FriendNav type={type} setType={setType} />
            <FriendList item={Friends} />
        </BoxStyle>
    );
};

export default FriendTemplat;
