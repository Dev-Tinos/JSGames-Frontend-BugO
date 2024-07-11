import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../atoms/Logo";
import styled from "styled-components";
import ProfileImg from "../atoms/ProfileImg";
import FriendPage from "../../pages/FriendPage";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
    content: {
        width: "660px",
        height: "780px",
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
        padding: "0px",
    },
};

const TopBar = styled.div`
    @media (max-width: 950px) {
        width: 900px;
    }

    background-color: #5383e8;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 200px;
    .space {
        flex: 1;
    }
    .nav-link-activev {
        color: #fff;
    }
    a {
        color: #b3cdff;
        text-decoration: none;
        width: auto;
        font-size: 22px;
        font-weight: bold;
        margin-left: 15px;
    }
    a:hover {
        color: #fff;
    }
    .leftMenu {
        display: flex;
        align-items: center;
    }
    .rightMenu {
        display: flex;
        .button {
            margin: auto;
            background-color: #5383e8;
            color: white;
            text-decoration: none;
            width: 100px;
            display: block;
            margin-left: 10px;
            border: 0px;
            font-size: 18px;
            i {
                font-size: 25px;
            }
        }
    }
`;

const TopNavigationBar = () => {
    const [userId, setUserId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = "unset";
    };

    useEffect(() => {
        setUserId(localStorage.getItem("userId"));
    }, [userId]);

    return (
        <TopBar>
            <div className="leftMenu">
                <Link to="/">
                    <Logo />
                </Link>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "nav-link-active" : "nav-link"
                    }
                >
                    홈
                </NavLink>
                <Link
                    to="/ranking"
                    className={({ isActive }) =>
                        isActive ? "nav-link-active" : "nav-link"
                    }
                >
                    랭킹
                </Link>
            </div>
            {userId === null ? (
                <div className="rightMenu">
                    <Link to="/login" className="button">
                        로그인
                    </Link>
                </div>
            ) : (
                <div className="rightMenu">
                    <button className="button">
                        <i
                            class="fa-solid fa-users fa-sm"
                            style={{
                                cursor: "pointer",
                                justifyContent: "center",
                            }}
                            onClick={openModal}
                        />
                    </button>
                    <Link to={`/mypage`}>
                        <ProfileImg />
                    </Link>
                </div>
            )}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Friend Modal"
                style={customStyles}
            >
                <FriendPage
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                ></FriendPage>
            </Modal>
        </TopBar>
    );
};

export default TopNavigationBar;
