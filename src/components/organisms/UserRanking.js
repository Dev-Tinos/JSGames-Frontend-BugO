import React from "react";
import styled from "styled-components";

const DivBox = styled.div`
    margin: auto;
    width: 1280px;
    height: 600px;
    background-color: #ccc;
`;

const UserRanking = ({ data }) => {
    return (
        <DivBox>
            {data !== null
                ? data.map((item) => <p>{JSON.stringify(item)}</p>)
                : null}
        </DivBox>
    );
};

export default UserRanking;
