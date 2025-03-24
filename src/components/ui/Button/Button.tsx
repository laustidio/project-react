import clsx from 'clsx';
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
  const variantStyles = {
    primary: clsx(
      'bg-gradient-to-b from-cyan-500 to-blue-600',
      'text-white border border-cyan-400 hover:shadow-cyan-500/50'
    ),
    secondary: clsx(
      'bg-gray-800 text-gray-300 border border-gray-600',
      'hover:bg-gray-700 hover:shadow-gray-500/50'
    ),
    outline: clsx(
      'bg-transparent text-cyan-400 border border-cyan-400',
      'hover:bg-cyan-400 hover:text-gray-900 hover:shadow-cyan-500/50'
    ),
  };

  return (
    <button
      className={clsx(
        'h-8 min-w-[100px]',
        'relative',
        'text-white font-medium tracking-wide uppercase',
        'border border-cyan-400 rounded-lg shadow-md',
        'transition-all duration-300 ease-in-out',
        'hover:scale-102 active:scale-95',
        'cursor-pointer',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
