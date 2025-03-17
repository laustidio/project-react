import React from 'react';
import { Menu, User } from 'lucide-react';

interface TopBarprops {
  toggleMenu: () => void;
}

const TopBar: React.FC<TopBarprops> = ({ toggleMenu }) => {
  return (
    <header
      className={`relative 
            top-0 
            left-0
            w-full
            h-14
            bg-gray-900
            text-white
            flex
            items-center
            px-4
            shadow-md z-50
            `}
    >
      <button
        className={`
                p-2 rounded-md 
                hover:bg-gray-700 
                hover:cursor-pointer
                `}
        onClick={toggleMenu}
      >
        <Menu size={24} />
      </button>
      <div className='flex-1'></div> {/* Flexible space to aligning center */}
      <button
        className={`
                p-2
                rounded-md
                hover: bg-gray-700
                hover: cursor-pointer
                `}
      >
        <User size={24} />
      </button>
    </header>
  );
};

export default TopBar;
