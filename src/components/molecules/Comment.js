import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    deleteHelpful,
    getHelpful,
    postHelpful,
} from "../../services/HelpfulApi";
import ProfileImg from "../atoms/ProfileImg";
import TimeAgo from "../../services/function/TimeAgo";

const CommentBox = styled.div`
    box-sizing: border-box;
    width: 100%;
    border-bottom: 3px solid #ddddff;
    align-items: center;
    padding: 40px;
    &.my {
        border: 3px solid #ddddff;
        border-radius: 10px;
    }
    .info {
        display: flex;
        font-size: 24px;
    }
    .imgbox {
        width: 100px;
        height: 100px;
        margin: 0 20px 0 0;
    }
    .roundimg {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
    .name {
        display: flex;
        font-weight: 700;
        margin: 0;
        gap: 10px;
    }
    button {
        cursor: pointer;
        background-color: #ffffff;
        border: 0;
        padding: 0;
    }
    i {
        font-size: 20px;
    }
    .star {
        margin: 10px 0;
        .fa-solid {
            color: #ffcc00;
        }
    }
    .helpful {
        margin: 0;
        .fa-solid {
            color: #ff0000;
        }
    }
    .text {
        margin: 20px 0 0;
        font-size: 20px;
    }
    .date {
        margin: 0 0 -10px;
        text-align: end;
    }
`;

const Comment = ({ item, styled }) => {
    const [ishelpful, setIshelpful] = useState();
    const [clicked, setClicked] = useState(false);
    const star = Math.floor(item.star);

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
        item.helpful++;
        setIshelpful(true);
        setClicked(false);
    };
    const Offhelpful = async () => {
        setClicked(true);
        await deleteHelpful({
            userId: localStorage.getItem("userId"),
            reviewId: item.reviewId,
        });
        item.helpful--;
        setIshelpful(false);
        setClicked(false);
    };

    return (
        <CommentBox className={styled === "my" ? "my" : null}>
            <div className="info">
                <div className="imgbox">
                    <ProfileImg img={item.user.profileImageURL} />
                </div>
                <div>
                    <p className="name">
                        {item.user.nickname}
                        {styled === "my" ? (
                            <button>
                                <i class="fa-solid fa-pencil"></i>
                            </button>
                        ) : null}
                    </p>
                    <p className="star">
                        {star >= 1 ? (
                            <i class="fa-solid fa-star" />
                        ) : (
                            <i class="fa-regular fa-star" />
                        )}
                        {star >= 2 ? (
                            <i class="fa-solid fa-star" />
                        ) : (
                            <i class="fa-regular fa-star" />
                        )}
                        {star >= 3 ? (
                            <i class="fa-solid fa-star" />
                        ) : (
                            <i class="fa-regular fa-star" />
                        )}
                        {star >= 4 ? (
                            <i class="fa-solid fa-star" />
                        ) : (
                            <i class="fa-regular fa-star" />
                        )}
                        {star === 5 ? (
                            <i class="fa-solid fa-star" />
                        ) : (
                            <i class="fa-regular fa-star" />
                        )}
                    </p>
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
                    <div className="buttonBox"></div>
                </div>
            </div>
            <p className="text">{item.reviewContent}</p>
            <p className="date">
                <TimeAgo timestamp={item.dateTime} />
            </p>
        </CommentBox>
    );
};

export default Comment;
