import clsx from 'clsx';
import React from 'react';
import {
  useFormContext,
  UseFormRegisterReturn,
  FieldError,
} from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;

  //Props to use without FormProvider
  register?: UseFormRegisterReturn<string>;
  error?: string | FieldError;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  className,
  register,
  error: externalError,
  ...props
}) => {
  const formContext = useFormContext();

  // Hybrid mode: Automatically detects context
  const isFormContext = !!formContext;
  const { register: formRegister, formState } = formContext || {};
  const internalError =
    externalError || (formState?.errors[name] as FieldError);

  return (
    <div className='relative w-full mb-2'>
      {label && (
        <label className='block text-white mb-1' htmlFor={name}>
          {label}
        </label>
      )}

      <input
        id={name}
        {...(isFormContext
          ? formRegister(name)
          : {
              ...props, // Automatic RHF (React Hook Form) registration
              ...register, // Manual usage
            })}
        className={clsx(
          'w-full max-w-md px-4 py-2 bg-gray-800 text-white',
          'border rounded-lg focus:ring-2 focus:ring-cyan-400',
          'focus:border-cyan-400 transition',
          className,
          internalError ? 'border-red-500' : 'border-gray-600'
        )}
        aria-invalid={!!internalError}
      />

      {internalError && (
        <p className='absolute top-full left-0 text-red-500 text-sm mt-1'>
          {typeof internalError === 'string'
            ? internalError
            : internalError.message}
        </p>
      )}
    </div>
  );
};

export default Input;
