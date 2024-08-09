import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAd } from "../../services/AdApi";

const BlockStyle = styled.div`
    box-sizing: border-box;
    width: 380px;
    height: 350px;
    padding: 10px;
    display: inline-block;
    border-radius: 10px;
    border: 2px solid #dfdfdf;
    position: relative;
    overflow: hidden;

    .banner {
        position: absolute;
        top: 20px;
        right: 20px;
        margin: 0;
        background-color: #ffff00;
        font-size: 20px;
        padding: 5px;
        border-radius: 10px;
        font-weight: 700;
    }
    .ad_thumbnail {
        display: block;
        width: 360px;
        height: 200px;
        object-fit: cover;
        background-color: #dfdfdf;
        border-radius: 10px;
        color: #000;
        transition: all 0.2s linear;
    }
    .title {
        font-size: 20px;
        text-align: center;
        margin: 10px 0;
    }
    .description {
        text-align: center;
        margin: 0;
    }
`;

const AdBlock = () => {
    const [adData, setAdData] = useState(null);

    const handleLoad = async () => {
        const result = await getAd();
        setAdData(result);
    };

    useEffect(() => {
        handleLoad();
    }, []);

    return (
        <a
            href={adData === null || adData.link}
            target="_blank"
            rel="noreferrer noopener"
        >
            <BlockStyle>
                {adData === null || (
                    <>
                        <img
                            className="ad_thumbnail"
                            src={adData.thumbnail}
                            alt="AD thumbnail"
                        />
                        <p className="banner">AD</p>
                        <p className="title">{adData.title}</p>
                        <p className="description">{adData.description}</p>
                    </>
                )}
            </BlockStyle>
        </a>
    );
};

export default AdBlock;
