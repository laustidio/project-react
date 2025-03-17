import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className={`flex-1 min-h-0 overflow-auto px-6 md:px-8 lg:px-10`}>
      {children}
    </div>
  );
};

export default Container;
