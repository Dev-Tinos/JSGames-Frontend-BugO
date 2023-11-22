import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getUser } from "../../services/UserApi";

const CommentBox = styled.div`
    align-items: center;
    background-color: #fff;
    width: 95%;
    margin: auto;
    display: flex;
    margin-top: 10px;
    box-shadow: 0 0 0 1px #000 inset;
    border-radius: 5px;
    height: 160px;
    .profile {
        width: 11%;
        text-align: center;
        img {
            width: 100px;
            height: 100px;
            box-shadow: 0 0 0 1px inset #000;
            margin: auto;
        }
    }
    .comment-content {
        width: 88%;
        height: 80%;
        .name {
            font-weight: bold;
            font-size: 18px;
            margin: 0px;
        }
        .text {
            font-size: 15px;
            margin: 5px 0px 0px 0px;
            height: 60%;
        }
        .date {
            margin-top: 5px;
            font-size: 12px;
            text-align: right;
            vertical-align: bottom;
            color: #888;
        }
    }
`;

const formatDate = (dateObj) => {
    const date = new Date(dateObj);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
};

const Comment = ({ item }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const apiData = await getUser(item.userId);
                setUser(apiData);
            } catch (error) {
                console.error();
            }
        };
        getData();
    }, [item]);

    return (
        <>
            {user === null ? null : (
                <CommentBox>
                    <div className="profile">
                        <img
                            src={require("../../assets/img/tino.png")}
                            alt={`${item.userId}`}
                        />
                    </div>
                    <div className="comment-content">
                        <p className="name">{user.nickname}</p>
                        <p className="text">{item.commentContent}</p>
                        <p className="date">{formatDate(item.dateTime)}</p>
                    </div>
                </CommentBox>
            )}
        </>
    );
};

export default Comment;
