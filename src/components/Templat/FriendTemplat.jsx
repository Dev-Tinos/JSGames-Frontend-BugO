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

const FriendTemplat = ({
    type,
    setType,
    closeModal,
    friend,
    requested,
    request,
    Search,
    searched,
    nickname,
    setNickname,
    refresh,
    setRefresh,
}) => {
    const handleSearch = (event) => {
        setNickname(event.target.value);
    };
    const activeEnter = (event) => {
        if (event.key === "Enter") {
            if (nickname === "") {
                alert("닉네임를 입력해주세요");
                return;
            }
            Search();
            setNickname("");
        }
    };

    const changeFriendList = () => {
        switch (type) {
            case 1:
                return (
                    <FriendList
                        item={requested}
                        type={type}
                        refresh={refresh}
                        setRefresh={setRefresh}
                    />
                );
            case 2:
                return (
                    <FriendList
                        item={request}
                        type={type}
                        refresh={refresh}
                        setRefresh={setRefresh}
                    />
                );
            default:
                return (
                    <div>
                        <FriendList
                            item={friend}
                            type={type}
                            searched={searched}
                            refresh={refresh}
                            setRefresh={setRefresh}
                        />
                    </div>
                );
        }
    };

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
                <FriendSearchBar
                    value={nickname}
                    handleChange={handleSearch}
                    activeEnter={activeEnter}
                />
                {changeFriendList()}
            </ModalPageStyle>
        </ModalStyle>
    );
};

export default FriendTemplat;
