import React from 'react';
import clsx from 'clsx';

interface CardFormProps {
  children: React.ReactNode;
  className?: string;
}

const CardForm: React.FC<CardFormProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'w-[400px] max-h-[600px] p-5 z-10',
        'flex flex-col items-center justify-center',
        'border border-white/20 bg-white/10 backdrop-blur-lg',
        'shadow-xl rounded-xl relative',
        className
      )}
    >
      {children}
    </div>
  );
};

export default CardForm;
