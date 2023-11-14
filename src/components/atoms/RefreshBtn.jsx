import React from "react";
import styled from "styled-components";

const RefreshBtnStyle = styled.button`
    background-color: #fff;
    border: 0px;
    cursor: pointer;
    margin-left: 10px;
`;

const RefreshBtn = ({ onClick, btnDisable }) => {
    return (
        <RefreshBtnStyle onClick={onClick} disabled={btnDisable ? true : false}>
            <i class="fa-solid fa-arrow-rotate-left fa-2x" />
        </RefreshBtnStyle>
    );
};

export default RefreshBtn;
