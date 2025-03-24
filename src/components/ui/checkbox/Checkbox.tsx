import clsx from 'clsx';
import React from 'react';
import { Check } from 'lucide-react';
import { useController, useFormContext } from 'react-hook-form';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  name: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, label, ...props }) => {
  const { control } = useFormContext() || {};
  const { field } = useController({ name, control });

  return (
    <label className={clsx('flex items-center space-x-2 cursor-pointer')}>
      {/* Invisible input */}
      <input type='checkbox' {...props} {...field} className='sr-only' />

      {/* Custom box */}
      <div
        className={clsx(
          'w-4 h-4 shrink-0',
          'border rounded-md',
          'flex items-center justify-center',
          'transition-colors duration-200',
          field.value
            ? 'bg-cyan-500 border-cyan-500 bg-gradient-to-b from-cyan-400 to-blue-600'
            : 'border-gray-400'
        )}
      >
        {field.value && <Check color='white' strokeWidth={4} />}
      </div>

      <span className={clsx('text-white text-xs/snug')}>{label}</span>
    </label>
  );
};

export default Checkbox;
