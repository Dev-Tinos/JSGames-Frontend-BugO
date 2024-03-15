import React from "react";
import FriendItem from "../molecules/FriendItem";
import styled from "styled-components";

const ListStyle = styled.div`
    overflow-y: auto;
    height: 500px;
`;

const FriendList = ({ item, type }) => {
    return (
        <ListStyle>
            {item.map((i) => (
                <FriendItem item={i} key={i.friendEmail} type={type} />
            ))}
        </ListStyle>
    );
};

export default FriendList;
