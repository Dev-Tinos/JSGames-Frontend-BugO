import React from "react";
import styled from "styled-components";

const Logoblock = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #ffffff;
    img {
        position: absolute;
        top: 20px;
        left: -10px;
        width: 100px;
        height: 100px;
        background-color: #fff;
        display: block;
    }
`;

const Logo = () => {
    return (
        <Logoblock>
            <img src={require("../../assets/img/tino.png")} alt="티노" />
        </Logoblock>
    );
};

export default Logo;
