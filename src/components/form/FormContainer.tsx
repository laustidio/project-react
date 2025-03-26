import clsx from 'clsx';
import React from 'react';

interface FormContainerProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <form className={clsx('w-full flex flex-col gap-4', className)} {...props}>
      {children}
    </form>
  );
};

export default FormContainer;
