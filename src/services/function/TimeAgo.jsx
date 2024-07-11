import React from "react";
import { parseISO } from "date-fns";

const TimeAgo = ({ timestamp }) => {
    let timeAgo = "";
    if (timestamp) {
        const date = parseISO(timestamp);
        const now = new Date();
        const differenceInMilliseconds = now - date;

        const minutes = Math.floor(differenceInMilliseconds / 1000 / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);

        if (months > 0) {
            timeAgo = `${months}개월 전`;
        } else if (days > 0) {
            timeAgo = `${days}일 전`;
        } else if (hours > 0) {
            timeAgo = `${hours}시간 전`;
        } else if (minutes > 0) {
            timeAgo = `${minutes}분 전`;
        } else {
            timeAgo = "방금 전";
        }
    }

    return <span>{timeAgo}</span>;
};

export default TimeAgo;
