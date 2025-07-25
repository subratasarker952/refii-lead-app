import React from 'react';
import clsx from 'clsx';

export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={clsx(
        'rounded-xl border bg-white text-gray-900 shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={clsx('p-6 pb-0', className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '', ...props }) {
  return (
    <h3 className={clsx('text-lg font-semibold', className)} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className = '', ...props }) {
  return (
    <p className={clsx('text-sm text-gray-500', className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ children, className = 'p-6', ...props }) {
  return (
    <div className={clsx(className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '', ...props }) {
  return (
    <div className={clsx('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
}
