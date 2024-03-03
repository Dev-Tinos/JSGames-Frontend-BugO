import React from "react";
import styled from "styled-components";

const FriendStyle = styled.div`
    width: 90%;
    height: auto;
    box-shadow: 0 0 2px inset #000;
    margin: auto;
    margin-top: 10px;
    display: flex;

    .profile {
        width: 15%;
        img {
            width: 80px;
            height: 80px;
            box-shadow: 0 0 0 1px inset #000;
            margin: auto;
        }
    }
    .textbox {
        width: 60%;
        p {
            margin: 5px;
        }
    }
    .buttonbox {
        width: 25%;
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
            </div>
            <div className="textbox">
                <p>{item.friendEmail}</p>
                <p>{item.friendName}</p>
                <p>{item.parentMajor}</p>
                <p>{item.major}</p>
            </div>
            <div className="buttonbox">
                <button>수락</button>
                <button>거절</button>
            </div>
        </FriendStyle>
    );
};

export default FriendItem;
