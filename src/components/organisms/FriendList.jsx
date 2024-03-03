import React from "react";
import FriendItem from "../molecules/FriendItem";

const FriendList = ({ item }) => {
    return (
        <div>
            {item.map((i) => (
                <FriendItem item={i} />
            ))}
        </div>
    );
};

export default FriendList;
