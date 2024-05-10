import React from "react";
import styled from "styled-components";
import {
    deleteFriend,
    deleteRequestFriend,
    postAcceptFriend,
    postRejectFriend,
    postRequestFriend,
} from "../../services/FriendApi";

const FriendStyle = styled.div`
    width: 600px;
    height: 96px;
    box-shadow: 0 0 2px inset #cccccc;
    margin: auto;
    margin-bottom: 10px;
    display: flex;
    border-radius: 10px;
    justify-content: space-between;
    .profile {
        display: flex;
        img {
            margin: 18px 8px 18px 18px;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            box-shadow: 0 0 0 1px inset #cccccc;
        }
        .textbox {
            margin: auto 0px;
            p {
                margin: 0px;
            }
            .name {
                font-size: 16px;
                font-weight: bold;
            }
            .major {
                font-size: 12px;
                margin-top: 10px;
            }
        }
    }
    .buttonbox {
        margin-right: 5px;
        font-size: 16px;
        color: #999999;
        button {
            width: 94px;
            height: 44px;
            box-shadow: 0 0 0 1px inset #cccccc;
            border: 0px;
            border-radius: 10px;
            font-size: 16px;
            margin: 26px 10px 26px 15px;
            background-color: #f2f2f2;
            color: #999999;
            cursor: pointer;
        }
        .button2 {
            background-color: #5383e8;
            color: #ffffff;
            box-shadow: 0 0 0 0;
            margin-left: -5px;
        }
        .button3 {
            width: 123px;
            background-color: #5383e8;
            color: #ffffff;
            box-shadow: 0 0 0 0;
            margin-left: -5px;
        }
    }
`;

const FriendItem = ({
    item,
    type,
    refresh,
    setRefresh,
    openModal2,
    closeModal2,
    setData,
}) => {
    const requestFriend = async () => {
        await postRequestFriend({
            userId: localStorage.getItem("userId"),
            friendEmail: item.friendEmail,
        });
        setRefresh(!refresh);
    };
    const rejectFriend = async () => {
        await postRejectFriend({
            userId: localStorage.getItem("userId"),
            friendEmail: item.friendEmail,
        });
        setRefresh(!refresh);
    };
    const acceptFriend = async () => {
        await postAcceptFriend({
            userId: localStorage.getItem("userId"),
            friendEmail: item.friendEmail,
        });
        setRefresh(!refresh);
    };
    const deleteRequest = async () => {
        await deleteRequestFriend({
            userId: localStorage.getItem("userId"),
            friendEmail: item.friendEmail,
        });
        setRefresh(!refresh);
    };
    const FriendDelete = async () => {
        await deleteFriend({
            userId: localStorage.getItem("userId"),
            friendEmail: item.friendEmail,
        });
        setRefresh(!refresh);
    };

    const buttonChange = () => {
        switch (type) {
            case 1:
                return (
                    <div className="buttonbox">
                        <button onClick={rejectFriend}>거절</button>
                        <button className="button2" onClick={acceptFriend}>
                            수락
                        </button>
                    </div>
                );
            case 2:
                return (
                    <div className="buttonbox">
                        {item.friendStatus === "PENDING"
                            ? "수락대기중"
                            : "요청이 취소 되었습니다."}
                        <button onClick={deleteRequest}>취소</button>
                    </div>
                );
            case 3:
                return (
                    <div className="buttonbox">
                        <button className="button3" onClick={requestFriend}>
                            친구 요청
                        </button>
                    </div>
                );
            default:
                return (
                    <div className="buttonbox">
                        <button onClick={FriendDelete}>삭제</button>
                    </div>
                );
        }
    };

    return (
        <FriendStyle>
            <div className="profile">
                <img
                    src={require("../../assets/img/tino.png")}
                    alt={`${item.friendProfile}`}
                    onClick={() => {
                        openModal2();
                        setData(item);
                    }}
                />
                <div className="textbox">
                    <p className="name">{item.friendName || item.nickname}</p>
                    <p className="major">{item.major}</p>
                </div>
            </div>
            {buttonChange()}
        </FriendStyle>
    );
};

export default FriendItem;
