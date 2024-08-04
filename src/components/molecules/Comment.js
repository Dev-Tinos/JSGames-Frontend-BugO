import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
    deleteHelpful,
    getHelpful,
    postHelpful,
} from "../../services/HelpfulApi";
import ProfileImg from "../atoms/ProfileImg";
import TimeAgo from "../../services/function/TimeAgo";
import CommentForm from "./CommentForm";

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
    .editForm {
        margin: 40px 0 0;
        button {
            background-color: #5383e2;
        }
    }
`;

const Comment = ({
    item,
    styled,
    reviewsubmit,
    reviewEdit,
    setReviewEdit,
    setSort,
    sort,
}) => {
    const [ishelpful, setIshelpful] = useState();
    const [clicked, setClicked] = useState(false);

    const IsEdit = () => {
        if (reviewEdit === true) {
            setReviewEdit(false);
        } else {
            setReviewEdit(true);
        }
    };

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
                            <button onClick={IsEdit}>
                                <i class="fa-solid fa-pencil"></i>
                            </button>
                        ) : null}
                    </p>
                    <p className="star">
                        {item.star >= 1 ? (
                            <i class="fa-solid fa-star" />
                        ) : (
                            <i class="fa-regular fa-star" />
                        )}
                        {item.star >= 2 ? (
                            <i class="fa-solid fa-star" />
                        ) : (
                            <i class="fa-regular fa-star" />
                        )}
                        {item.star >= 3 ? (
                            <i class="fa-solid fa-star" />
                        ) : (
                            <i class="fa-regular fa-star" />
                        )}
                        {item.star >= 4 ? (
                            <i class="fa-solid fa-star" />
                        ) : (
                            <i class="fa-regular fa-star" />
                        )}
                        {item.star >= 5 ? (
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
            {reviewEdit === true ? (
                <div className="editForm">
                    <CommentForm
                        type={reviewEdit}
                        IsEdit={IsEdit}
                        reviewsubmit={reviewsubmit}
                        reviewEdit={reviewEdit}
                        setReviewEdit={setReviewEdit}
                        sort={sort}
                        setSort={setSort}
                    />
                </div>
            ) : null}
        </CommentBox>
    );
};

export default Comment;
