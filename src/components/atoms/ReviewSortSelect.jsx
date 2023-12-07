import React from "react";
import styled from "styled-components";

const SelectStyle = styled.select`
    height: 50px;
    margin: auto;
    border: 0px;
`;

const ReviewSortSelect = ({ item, setSort }) => {
    const handleChange = (e) => {
        setSort(e.target.value);
    };
    return (
        <SelectStyle onChange={handleChange}>
            {item.map((item) => (
                <option
                    key={item.value}
                    value={item.value}
                    defaultValue={item.defaultValue === item.value}
                >
                    {item.name}
                </option>
            ))}
        </SelectStyle>
    );
};

export default ReviewSortSelect;
