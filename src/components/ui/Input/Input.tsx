import React from 'react';
import { useFormContext } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='relative w-full mb-2'>
      {label && <label className='block text-white mb-1'>{label}</label>}
      <input
        {...register(name)}
        {...props}
        className={`
          w-full max-w-md px-4 py-2 
          bg-gray-800 text-white 
          border rounded-lg 
          focus:ring-2 focus:ring-cyan-400 
          ${props.className || ''}
          ${errors[name] ? 'border-red-500' : 'border-gray-600'}
        `}
      />
      {errors[name] && (
        <p className='absolute top-full left-0 text-red-500 text-sm'>
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default Input;
