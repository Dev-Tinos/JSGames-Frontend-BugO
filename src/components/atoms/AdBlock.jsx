import React from "react";
import styled from "styled-components";

const BlockStyle = styled.div`
    list-style-type: none;
    width: 380px;
    height: 300px;
    margin: 10px 10px -16px 10px;
    display: inline-block;
    border-radius: 10px;
    box-shadow: 0 0 0 2px #ccc;

    .ad {
        margin: 10px auto;
        display: block;
        width: 360px;
        height: 280px;
        object-fit: cover;
        background-color: #dfdfdf;
        border-radius: 10px;
    }
`;

const AdBlock = () => {
    return (
        <BlockStyle>
            <div className="ad">
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3414009965030523"
                    crossorigin="anonymous"
                ></script>
                {/* <!-- web1 --> */}
                <ins
                    class="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-client="ca-pub-3414009965030523"
                    data-ad-slot="7615886042"
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                ></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
        </BlockStyle>
    );
};

export default AdBlock;
