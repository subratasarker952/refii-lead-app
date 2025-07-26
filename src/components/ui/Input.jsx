import React from "react";

const Input = ({
  id,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  placeholder = "",
  disabled = false,
  className = "",
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      disabled={disabled}
      className={`block w-full border border-gray-300 rounded-md px-3 py-2 text-sm
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        disabled:opacity-50 disabled:cursor-not-allowed
        transition duration-200
        ${className}`}
    />
  );
};

export default Input;
