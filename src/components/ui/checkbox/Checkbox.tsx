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
    <label className='flex items-center space-x-2 cursor-pointer'>
      {/* Invisible input */}
      <input type='checkbox' {...props} {...field} className='sr-only' />

      {/* Custom box */}
      <div
        className={clsx(
          'w-5 h-5 flex shrink-0 items-center justify-center border rounded-md',
          field.value ? 'bg-cyan-400 border-cyan-400' : 'border-gray-400'
        )}
      >
        {field.value && <Check size={20} color='white' strokeWidth={4} />}
      </div>

      <span className='text-white text-sm'>{label}</span>
    </label>
  );
};

export default Checkbox;
