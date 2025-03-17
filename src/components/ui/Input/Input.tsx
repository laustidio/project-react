import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      className={`
        w-full max-w-md px-4 py-2 
        bg-gray-800 
        text-white 
        border 
        border-gray-600 
        rounded-lg 
        focus:ring-2 
        focus:ring-cyan-400 
        focus:border-cyan-400 
        transition
        ${props.className || ''}
        `}
    />
  );
};

export default Input;
