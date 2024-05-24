import React from "react";
import styled from "styled-components";

const InputBox = styled.div`
    width: 600px;
    height: 48px;
    margin: 30px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    i {
        position: absolute;
        margin: 10px;
        color: #999999;
    }
    input {
        width: 100%;
        height: 48px;
        font-size: 16px;
        background-color: #f2f2f2;
        box-shadow: 0 0 0 1px inset #cccccc;
        border-radius: 10px;
        border: 0px;
        color: #999999;
        padding-left: 30px;
    }
`;

const FriendSearchBar = ({ value, handleChange, activeEnter }) => {
    return (
        <InputBox>
            <i class="fas fa-search"></i>
            <input
                className="search-bar__input"
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
