import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

type HeadingProps = ComponentPropsWithoutRef<'h1'> & {
  variant?: 'h1' | 'h2';
};

export const Heading = ({
  variant = 'h1',
  className,
  ...props
}: HeadingProps) => {
  const baseClasses = 'text-white font-serif text-center';

  const variants = {
    h1: `${baseClasses} text-4xl font-semibold mb-3`,
    h2: `${baseClasses} text-2xl font-semibold mb-2`,
  };

  const Component = variant;

  return (
    <Component className={clsx(variants[variant], className)} {...props} />
  );
};
