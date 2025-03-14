import React from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
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
        transition`}
    />
  );
};

export default Input;
