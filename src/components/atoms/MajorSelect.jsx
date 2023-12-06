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
                <option
                    key={item.value}
                    value={item.value}
                    defaultValue={item.defaultValue === item.value}
                >
                    {item.value}
                </option>
            ))}
        </SelectStyle>
    );
};

export default MajorSelect;
