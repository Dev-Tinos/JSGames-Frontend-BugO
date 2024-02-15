import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    deleteHelpful,
    getHelpful,
    postHelpful,
} from "../../services/HelpfulApi";

const CommentBox = styled.div`
    align-items: center;
    /* background-color: #fff; */
    width: 95%;
    margin: auto;
    display: flex;
    margin-top: 10px;
    box-shadow: 0 0 0 1px #000 inset;
    border-radius: 5px;
    height: auto;
    .profile {
        margin: 10px 0px;
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
        margin: 15px 0px 0px;
        width: 88%;
        height: 80%;
        .name {
            font-weight: bold;
            font-size: 18px;
            margin: 0px;
        }
        .helpful {
            margin: 0px;
            font-size: 18px;
            i {
                color: red;
            }
        }
        .text {
            font-size: 15px;
            margin: 5px 0px 0px;
            height: 60%;
        }
        .date {
            margin: 0px 0px 10px;
            font-size: 12px;
            text-align: right;
            vertical-align: bottom;
            color: #888;
        }
        .btn {
            button {
                width: 30px;
                height: 30px;
                font-size: 18px;
            }
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

const Comment = ({ item, STAR, styled }) => {
    const [ishelpful, setIshelpful] = useState();
    const [clicked, setClicked] = useState(false);
    const star = STAR.find((star) => star.value === item.star);
    useEffect(() => {
        const getData = async () => {
            const Ishelpful = await getHelpful({
                userId: localStorage.getItem("userId"),
                reviewId: item.reviewId,
            });
            setIshelpful(Ishelpful.helpful);
        };
        getData();
    }, [item.reviewId, ishelpful]);

    const Onhelpful = async () => {
        setClicked(true);
        await postHelpful({
            userId: localStorage.getItem("userId"),
            reviewId: item.reviewId,
        });
        setIshelpful(true);
        window.location.reload();
        setClicked(false);
    };
    const Offhelpful = async () => {
        setClicked(true);
        await deleteHelpful({
            userId: localStorage.getItem("userId"),
            reviewId: item.reviewId,
        });
        setIshelpful(false);
        window.location.reload();
        setClicked(false);
    };
    return (
        <CommentBox
            style={
                styled === "my"
                    ? {
                          "background-color": " #ffffb5",
                      }
                    : {
                          "background-color": "#fff",
                      }
            }
        >
            <div className="profile">
                <img
                    src={require("../../assets/img/tino.png")}
                    alt={`${item.user.profileImage}`}
                />
            </div>
            <div className="comment-content">
                <p className="name">
                    {item.user.nickname}
                    {item.reviewId}
                </p>
                <p className="text">{item.reviewContent}</p>
                <p className="name">{star.name}</p>
                <p className="helpful">
                    {ishelpful === true ? (
                        <button
                            onClick={() => Offhelpful()}
                            disabled={clicked ? true : false}
                        >
                            <i class="fa-solid fa-heart" />
                        </button>
                    ) : (
                        <button
                            onClick={() => Onhelpful()}
                            disabled={clicked ? true : false}
                        >
                            <i class="fa-regular fa-heart" />
                        </button>
                    )}
                    {" " + item.helpful}
                </p>
                {styled === "my" ? (
                    <div className="btn">
                        <button>
                            <i class="fa-solid fa-trash"></i>
                        </button>
                        <button>
                            <i class="fa-solid fa-pencil"></i>
                        </button>
                    </div>
                ) : null}
                <p className="date">{formatDate(item.dateTime)}</p>
            </div>
        </CommentBox>
    );
};

export default Comment;
