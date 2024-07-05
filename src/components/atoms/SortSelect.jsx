import React from "react";
import styled from "styled-components";

const SelectStyle = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    gap: 20px;
    margin: 10px 0 0;
    height: 100px;
    padding: 0;
    li {
        background-color: #efefef;
        display: inline-block;
        padding: 15px 20px;
        text-align: center;
        cursor: pointer;
        border-radius: 20px;
        &.active {
            background-color: #5383e8;
            color: white;
        }
        &:hover {
            background-color: #5383e8;
            color: white;
        }
    }
`;

const SortSelect = ({ item, setSort, sort }) => {
    return (
        <SelectStyle>
            {item.map((item) => (
                <li
                    key={item.value}
                    value={item.value}
                    className={sort === item.value ? "active" : ""}
                    defaultValue={item.defaultValue === item.value}
                    onClick={() => setSort(item.value)}
                >
                    {item.name}
                </li>
            ))}
        </SelectStyle>
    );
};

export default SortSelect;
