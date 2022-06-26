import React from "react";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    name={name}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full border border-[#E3E1E3] rounded-[10px] p-2 outline-none bg-transparent text-black dark:text-white text-sm"
  />
);

export default Input;
