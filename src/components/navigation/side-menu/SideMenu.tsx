import React from 'react';
import { Link } from 'react-router-dom';
import { sideMenuStyles } from './SideMenuStyles';
import Button from '../../ui/button/Button';
import clsx from 'clsx';

interface SideMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  toggleLogout: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, toggleLogout }) => {
  return (
    <aside
      className={clsx(
        'fixed top-14 left-0 h-full w-50 opacity-95',
        'bg-[#111826fa] transition-transform z-1',
        isOpen ? 'translate-x-0' : '-translate-x-64'
      )}
    >
      {/* Menu links */}
      <nav className='mt-10 space-y-4 text-white'>
        <Link to='/home' className={sideMenuStyles.link}>
          Home
        </Link>
        <Link to='/profile' className={sideMenuStyles.link}>
          Profile
        </Link>
        <Link to='/settings' className={sideMenuStyles.link}>
          Settings
        </Link>
      </nav>
      <div className={sideMenuStyles.buttonLogout}>
        <Button onClick={toggleLogout} variant='secondary'>
          LogOut
        </Button>
      </div>
    </aside>
  );
};

export default SideMenu;
