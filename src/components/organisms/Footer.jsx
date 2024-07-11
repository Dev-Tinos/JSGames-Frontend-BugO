import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterStyle = styled.div`
    margin: auto;
    height: 100px;
    background-color: #ffffff;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    width: 90%;
    bottom: 0;
    a {
        color: #1f1f1f;
        text-decoration: none;
    }
    .footerBox {
        border-top: 2px solid #efefef;
        width: 100%;
        display: flex;
        justify-content: left;
        padding: 30px 0;
        gap: 30px;
    }
`;

const Footer = () => {
    return (
        <FooterStyle>
            <div className="footerBox">
                <Link>개인정보 처리 방침</Link>
                <Link>이용 약관</Link>
            </div>
        </FooterStyle>
    );
};

export default Footer;
