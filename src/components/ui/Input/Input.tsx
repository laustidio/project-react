import clsx from 'clsx';
import React from 'react';
import ErrorMessage from './ErrorMessage';
import { FieldError, useFormContext } from 'react-hook-form';

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
    <div className='relative w-full mb-1'>
      {label && <label className='block text-white mb-1'>{label}</label>}
      <input
        {...register(name)}
        {...props}
        className={clsx(
          'w-full max-w-md px-3 py-1.5',
          'bg-gray-800 text-white',
          'border rounded-lg focus:ring-2 focus:ring-cyan-400',
          props.className || '',
          errors[name] ? 'border-red-500' : 'border-gray-600'
        )}
      />
      <ErrorMessage error={errors[name] as FieldError} />
    </div>
  );
};

export default Input;
