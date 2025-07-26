
import React from "react";
const AlertDescription = ({ children, className = "" }) => {
    return (
        <div className={`text-red-800 ${className}`}>
            {children}
        </div>
    );
};

export default AlertDescription;
