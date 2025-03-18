import React from 'react';
import { Check } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  name: string;
  register?: any;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, label, register, ...props }) => {
  const formContext = useFormContext();

  return (
    <label className='flex items-center space-x-2 cursor-pointer'>

      {/* Invisible checkbox */}
      <input
        type='checkbox'
        className='peer hidden'
        {...props}
        {...(register ? register : formContext?.register(name))}
      />

      {/* Custom checkbox */}
      <div
        className={`
          w-5 h-5 
          border border-gray-400 rounded-md 
          flex items-center justify-center
          transition duration-200
           peer-checked:bg-cyan-400 peer-checked:border-cyan-400
        `}>
        {props.checked && <Check size={16} color="white" />}
      </div>

      <span className='text-white text-sm'>{label}</span>
    </label>
  );
};

export default Checkbox;
