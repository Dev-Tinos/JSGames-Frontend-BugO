import React from "react";
import FriendItem from "../molecules/FriendItem";
import styled from "styled-components";

const ListStyle = styled.div`
    overflow-y: auto;
    height: 55vh;
`;

const FriendList = ({ item }) => {
    return (
        <ListStyle>
            {item.map((i) => (
                <FriendItem item={i} key={i.friendEmail} />
            ))}
        </ListStyle>
    );
};

export default FriendList;
