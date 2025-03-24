import clsx from 'clsx';
import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import { FieldError, useFormContext } from 'react-hook-form';
import { Eye, EyeClosed } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  icon?: React.ReactNode;
  isPassword?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  icon,
  isPassword,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='relative w-full mb-1'>
      {label && <label className='block text-white mb-1'>{label}</label>}

      <div className='relative'>
        {icon && (
          <div
            className={clsx(
              'absolute left-3 top-1/2',
              '-translate-y-1/2',
              'text-gray-400'
            )}
          >
            {icon}
          </div>
        )}

        <input
          {...register(name)}
          {...props}
          type={isPassword ? (showPassword ? 'text' : 'password') : props.type}
          className={clsx(
            'w-full max-w-md px-3 py-1.5',
            'bg-gray-800 text-white',
            'border rounded-lg focus:ring-2 focus:ring-cyan-400',
            errors[name] ? 'border-red-500' : 'border-gray-600',
            props.className || '',
            icon ? 'pl-10' : '', // If have icon, add padding
            isPassword ? 'pr-10' : '' // Add space for eye icon
          )}
        />
        {/* Eye for password */}
        {isPassword && (
          <button
            type='button'
            className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors cursor-pointer'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <Eye size={18} /> : <EyeClosed size={18} />}
          </button>
        )}
      </div>
      <ErrorMessage error={errors[name] as FieldError} />
    </div>
  );
};

export default Input;
