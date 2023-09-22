import React from "react";
import styled from "styled-components";

const Logoblock = styled.div`
    width: 75px;
    height: 75px;
    background-color: #4249e5;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`;

const Logo = () => {
    return (
        <Logoblock>
            <img src="assets/img/tino.png" alt="티노" />
        </Logoblock>
    );
};

export default Logo;
