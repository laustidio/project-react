import React from "react";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", className, children, ...props }) => {
    const baseStyles = "w-full h-8 px-4 rounded-lg font-semibold transition-all duration-300 hover:cursor-pointer";

    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-800",
        secondary: "bg-gray-500 text-white hover:bg-gray-700",
        outline: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    };

    return (
        <button className={`
        ${baseStyles} 
        ${variantStyles[variant]} 
        ${className}`}
            {...props}>
            {children}
        </button>
    )
}

export default Button;
