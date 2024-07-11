import React from "react";
import styled from "styled-components";

const SelectStyle = styled.ul`
    display: flex;
    justify-content: right;
    align-items: center;
    width: 95%;
    height: 50px;
    margin: auto;
    border: 0px;
    padding: 0;
    gap: 20px;
    li {
        display: inline-block;
        cursor: pointer;
        &.active {
            color: #5383e8;
        }
        &.star {
            color: #ff0000;
        }
    }
`;

const ReviewSortSelect = ({ item, setSort, sort }) => {
    return (
        <SelectStyle>
            {item.map((item) => (
                <li
                    key={item.value}
                    value={item.value}
                    defaultValue={item.defaultValue === item.value}
                    className={sort === item.value ? "active" : ""}
                    onClick={() => setSort(item.value)}
                >
                    {item.name}
                </li>
            ))}
        </SelectStyle>
    );
};

export default ReviewSortSelect;
