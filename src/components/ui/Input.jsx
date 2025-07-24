import React from 'react';
import clsx from 'clsx';

export default function Input({
  label,
  type = "text",
  id,
  name,
  placeholder,
  value,
  onChange,
  className = '',
  disabled = false,
  required = false,
  ...rest
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id || name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={id || name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        required={required}
        className={clsx(
          "px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm",
          "disabled:opacity-50",
          className
        )}
        {...rest}
      />
    </div>
  );
}
