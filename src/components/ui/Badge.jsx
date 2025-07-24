import React from 'react';
import clsx from 'clsx';

export default function Badge({ children, variant = 'default', className = '' }) {
  const baseStyle = "inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold";

  const variantStyles = {
    default: "bg-gray-200 text-gray-800",
    success: "bg-green-100 text-green-700",
    danger: "bg-red-100 text-red-700",
    warning: "bg-yellow-100 text-yellow-800",
    info: "bg-blue-100 text-blue-700",
  };

  return (
    <span className={clsx(baseStyle, variantStyles[variant], className)}>
      {children}
    </span>
  );
}
