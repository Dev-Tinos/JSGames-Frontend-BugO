import React from "react";
import styled from "styled-components";

const Logoblock = styled.div`
    margin: 10px;
    img {
        background-color: #fff;
        width: 75px;
        height: 75px;
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
