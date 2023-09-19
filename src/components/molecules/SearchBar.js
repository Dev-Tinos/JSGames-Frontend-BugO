import React from "react";
import Btn from "../atoms/Button.js";
import Input from "../atoms/Input.js";

const SearchBar = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <Input type="text" placeholder={"Search"} />
            <Btn text="검색" />
        </form>
    );
};

export default SearchBar;
