import React from "react";
import styled from "styled-components";

const Logoblock = styled.div`
    width: 75px;
    height: 75px;
    background-color: #4249e5;
    border-radius: 50%;
    img {
        margin: 5px auto;
        display: block;
        border-radius: 50%;
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
