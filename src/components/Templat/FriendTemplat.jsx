import React from "react";
import FriendNav from "../organisms/FriendNav";
import styled from "styled-components";
import FriendList from "../organisms/FriendList";
import FriendSearchBar from "../atoms/FriendSearchBar";

export const ModalStyle = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100vh;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
`;

const ModalPageStyle = styled.div`
    width: 660px;
    height: 780px;
    z-index: 100;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 0 1px inset #cccccc;
    .title {
        height: 72px;
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        color: #333333;
        margin: auto;
        border-bottom: 1px solid #cccccc;
        margin: 0px 0px 20px;
        i {
            margin: auto;
            height: 24px;
            margin: 24px;
        }
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

const FriendTemplat = ({ type, setType, closeModal }) => {
    return (
        <ModalStyle onClick={closeModal}>
            <ModalPageStyle onClick={(e) => e.stopPropagation()}>
                <div className="title">
                    <i class="fa-solid fa-users"> 친구</i>
                    <i
                        class="fa-solid fa-xmark"
                        style={{ color: "#999999", cursor: "pointer" }}
                        onClick={closeModal}
                    />
                </div>
                <FriendNav type={type} setType={setType} />
                <FriendSearchBar />
                <FriendList item={Friends} />
            </ModalPageStyle>
        </ModalStyle>
    );
};

export default FriendTemplat;
