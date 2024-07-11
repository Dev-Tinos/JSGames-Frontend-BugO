import React from "react";
import styled from "styled-components";

const StarStyle = styled.ul`
    display: flex;
    gap: 20px;
    list-style-type: none;
    padding: 0;
    li {
        cursor: pointer;
        &.active {
            .fa-solid.fa-star {
                color: #ffcc00;
            }
        }
    }
`;

const StarSelect = ({ setSort, sort }) => {
    return (
        <StarStyle>
            <li
                key={1}
                value={1}
                className={sort === 1 ? "active" : null}
                onClick={() => setSort(1)}
            >
                <i class="fa-solid fa-star" />
                <i class="fa-regular fa-star" />
                <i class="fa-regular fa-star" />
                <i class="fa-regular fa-star" />
                <i class="fa-regular fa-star" />
            </li>
            <li
                key={1}
                value={1}
                className={sort === 2 ? "active" : null}
                onClick={() => setSort(2)}
            >
                <i class="fa-solid fa-star" />
                <i class="fa-solid fa-star" />
                <i class="fa-regular fa-star" />
                <i class="fa-regular fa-star" />
                <i class="fa-regular fa-star" />
            </li>
            <li
                key={1}
                value={1}
                className={sort === 3 ? "active" : null}
                onClick={() => setSort(3)}
            >
                <i class="fa-solid fa-star" />
                <i class="fa-solid fa-star" />
                <i class="fa-solid fa-star" />
                <i class="fa-regular fa-star" />
                <i class="fa-regular fa-star" />
            </li>
            <li
                key={1}
                value={1}
                className={sort === 4 ? "active" : null}
                onClick={() => setSort(4)}
            >
                <i class="fa-solid fa-star" />
                <i class="fa-solid fa-star" />
                <i class="fa-solid fa-star" />
                <i class="fa-solid fa-star" />
                <i class="fa-regular fa-star" />
            </li>
            <li
                key={1}
                value={1}
                className={sort === 5 ? "active" : null}
                onClick={() => setSort(5)}
            >
                <i class="fa-solid fa-star" />
                <i class="fa-solid fa-star" />
                <i class="fa-solid fa-star" />
                <i class="fa-solid fa-star" />
                <i class="fa-solid fa-star" />
            </li>
        </StarStyle>
    );
};

export default StarSelect;
