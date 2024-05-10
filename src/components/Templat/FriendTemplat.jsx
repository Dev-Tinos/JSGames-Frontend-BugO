import React, { useState } from "react";
import FriendNav from "../organisms/FriendNav";
import styled from "styled-components";
import FriendList from "../organisms/FriendList";
import FriendSearchBar from "../atoms/FriendSearchBar";
import Modal from "react-modal";
import FriendProfile from "../organisms/FriendProfile";

const customStyles = {
    content: {
        width: "1280px",
        height: "800px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 0 0 1px inset #cccccc",
    },
};

const ModalPageStyle = styled.div`
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
    const [isModal2Open, setIsModal2Open] = useState(false);
    const [data, setData] = useState();

    const openModal2 = () => {
        setIsModal2Open(true);
    };

    const closeModal2 = () => {
        setIsModal2Open(false);
    };

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
                        openModal2={openModal2}
                        setData={setData}
                    />
                );
            case 2:
                return (
                    <FriendList
                        item={request}
                        type={type}
                        refresh={refresh}
                        setRefresh={setRefresh}
                        openModal2={openModal2}
                        setData={setData}
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
                            openModal2={openModal2}
                            setData={setData}
                        />
                    </div>
                );
        }
    };

    return (
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
            <Modal
                isOpen={isModal2Open}
                onRequestClose={closeModal2}
                contentLabel="Friend Profile Modal"
                style={customStyles}
            >
                <FriendProfile data={data} closeModal2={closeModal2} />
            </Modal>
        </ModalPageStyle>
    );
};

export default FriendTemplat;
