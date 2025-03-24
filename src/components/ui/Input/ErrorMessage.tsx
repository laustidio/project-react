import React from 'react';
import { FieldError } from 'react-hook-form';

interface ErrorMessageProps {
  error?: FieldError;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  if (!error) return null;

  return (
    <p className='absolute top-full left-0 text-red-500 text-xs'>
      {error.message}
    </p>
  );
};

export default ErrorMessage;
