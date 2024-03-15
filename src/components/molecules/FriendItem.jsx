import React from "react";
import styled from "styled-components";

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
                margin-bottom: 10px;
                font-weight: bold;
            }
            .major {
                font-size: 12px;
            }
        }
    }
    .buttonbox {
        margin-right: 5px;
        button {
            width: 94px;
            height: 44px;
            box-shadow: 0 0 0 1px inset #cccccc;
            border: 0px;
            border-radius: 10px;
            font-size: 16px;
            margin: 26px 10px 26px 0px;
            background-color: #f2f2f2;
            color: #999999;
        }
        .button2 {
            background-color: #5383e8;
            color: #ffffff;
            box-shadow: 0 0 0 0;
        }
    }
`;

const FriendItem = ({ item }) => {
    return (
        <FriendStyle>
            <div className="profile">
                <img
                    src={require("../../assets/img/tino.png")}
                    alt={`${item.friendProfile}`}
                />
                <div className="textbox">
                    <p className="name">{item.friendName}</p>
                    <p className="major">{item.major}</p>
                </div>
            </div>
            <div className="buttonbox">
                <button>거절</button>
                <button className="button2">수락</button>
            </div>
        </FriendStyle>
    );
};

export default FriendItem;
