import React from "react";

const Alert = ({ children, className = "" }) => {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    );
};

export default Alert;
