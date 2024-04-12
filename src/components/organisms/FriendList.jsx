import React from "react";
import FriendItem from "../molecules/FriendItem";
import styled from "styled-components";

const ListStyle = styled.div`
    overflow-y: auto;
    height: 500px;
`;

const FriendList = ({ item, type, searched, refresh, setRefresh }) => {
    return (
        <ListStyle>
            {type === 0
                ? searched.map((i) =>
                      i.userId === localStorage.getItem("userId") ? null : (
                          <FriendItem
                              item={i}
                              key={i.userId}
                              type={3}
                              refresh={refresh}
                              setRefresh={setRefresh}
                          />
                      )
                  )
                : null}
            {item.map((i) => (
                <FriendItem
                    item={i}
                    key={i.friendEmail}
                    type={type}
                    refresh={refresh}
                    setRefresh={setRefresh}
                />
            ))}
        </ListStyle>
    );
};

export default FriendList;
