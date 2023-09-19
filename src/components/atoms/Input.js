import React, { useState } from "react";
import "./Input.css";

const Input = ({ type, placeholder }) => {
    const [value, setValue] = useState("");

    const onhandleChange = (e) => {
        setValue(e.target.value);
        console.log(value);
    };

    return (
        <input
            className="input"
            type={type}
            value={value}
            onChange={onhandleChange}
            placeholder={placeholder}
        ></input>
    );
};

export default Input;
