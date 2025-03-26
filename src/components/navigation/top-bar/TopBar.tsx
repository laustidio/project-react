import React from 'react';
import { Menu, User } from 'lucide-react';
import clsx from 'clsx';

interface TopBarprops {
  toggleMenu: () => void;
}

const TopBar: React.FC<TopBarprops> = ({ toggleMenu }) => {
  return (
    <header
      className={clsx(
        'w-full h-14 top-0 left-0 px-4 opacity-95',
        'relative flex items-center z-50',
        'bg-gray-900 text-white shadow-md'
      )}
    >
      <button
        className={clsx('p-2 hover:bg-gray-700 rounded-md cursor-pointer')}
        onClick={toggleMenu}
      >
        <Menu size={24} />
      </button>
      <div className='flex-1'></div> {/* Flexible space to aligning center */}
      <button
        className={clsx('p-2 rounded-md hover: bg-gray-700 cursor-pointer')}
      >
        <User size={24} />
      </button>
    </header>
  );
};

export default TopBar;
