import React from "react";
import styled from "styled-components";

const StarStyle = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
        cursor: pointer;
        &.active {
            .fa-solid.fa-star {
                color: #ffcc00;
            }
        }
        i {
            font-size: 30px;
        }
    }
`;

const StarSelect = ({ setSort, sort }) => {
    return (
        <StarStyle>
            <li
                className={sort > 0 ? "active" : null}
                onClick={() => setSort(1)}
            >
                {sort > 0 ? (
                    <i class="fa-solid fa-star" />
                ) : (
                    <i class="fa-regular fa-star" />
                )}
            </li>
            <li
                className={sort > 1 ? "active" : null}
                onClick={() => setSort(2)}
            >
                {sort > 1 ? (
                    <i class="fa-solid fa-star" />
                ) : (
                    <i class="fa-regular fa-star" />
                )}
            </li>
            <li
                className={sort > 2 ? "active" : null}
                onClick={() => setSort(3)}
            >
                {sort > 2 ? (
                    <i class="fa-solid fa-star" />
                ) : (
                    <i class="fa-regular fa-star" />
                )}
            </li>
            <li
                className={sort > 3 ? "active" : null}
                onClick={() => setSort(4)}
            >
                {sort > 3 ? (
                    <i class="fa-solid fa-star" />
                ) : (
                    <i class="fa-regular fa-star" />
                )}
            </li>
            <li
                className={sort > 4 ? "active" : null}
                onClick={() => setSort(5)}
            >
                {sort > 4 ? (
                    <i class="fa-solid fa-star" />
                ) : (
                    <i class="fa-regular fa-star" />
                )}
            </li>
        </StarStyle>
    );
};

export default StarSelect;
