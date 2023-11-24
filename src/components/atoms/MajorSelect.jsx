import React from "react";
import styled from "styled-components";

const SelectStyle = styled.select`
    width: 91%;
    height: 50px;
    margin: 10px;
    border: 0px;
`;

const MajorSelect = ({ item, setMajor }) => {
    const handleChange = (e) => {
        setMajor(e.target.value);
    };
    return (
        <SelectStyle onChange={handleChange}>
            {item.map((item) => (
                <option>{item.value}</option>
            ))}
        </SelectStyle>
    );
};

export default MajorSelect;
