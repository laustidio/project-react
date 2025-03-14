import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className,
  children,
  ...props
}) => {
  const baseStyles = `
    relative overflow-hidden py-1 
    text-white font-medium tracking-wide uppercase 
    border border-cyan-400 rounded-lg shadow-md
    transition-all duration-300 ease-in-out
    hover:scale-105 active:scale-95
    h-9 min-w-[120px]
    hover:cursor-pointer`;

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border border-cyan-400 hover:shadow-cyan-500/50',
    secondary:
      'bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700 hover:shadow-gray-500/50',
    outline:
      'bg-transparent text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-gray-900 hover:shadow-cyan-500/50',
  };

  return (
    <button
      className={`
        ${baseStyles} 
        ${variantStyles[variant]} 
        ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
