import React from "react";
import styled from "styled-components";

const InputBox = styled.div`
    width: 600px;
    height: 48px;
    margin: 30px;
    input {
        width: 600px;
        height: 48px;
        font-size: 16px;
        background-color: #f2f2f2;
        box-shadow: 0 0 0 1px inset #cccccc;
        border-radius: 10px;
        border: 0px;
        color: #999999;
    }
`;

const FriendSearchBar = ({ value, handleChange, activeEnter }) => {
    return (
        <InputBox>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={"사용자 검색"}
                onKeyDown={activeEnter}
            ></input>
        </InputBox>
    );
};

export default FriendSearchBar;
