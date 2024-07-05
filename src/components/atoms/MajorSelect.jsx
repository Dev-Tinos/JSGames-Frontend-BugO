import React from "react";
import styled from "styled-components";

const SelectStyle = styled.select`
    box-sizing: border-box;
    display: box;
    width: 500px;
    height: 70px;
    margin: 10px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    font-size: 18px;
    padding: 10px 16px;

    option {
        border: 1px solid red;
        border-radius: 5px;
        height: 100px;
        padding: 10px;
        appearance: none;
        &:hover {
            background-color: #f1f1f1;
        }
    }
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
