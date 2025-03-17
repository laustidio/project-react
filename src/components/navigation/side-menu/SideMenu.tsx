import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sideMenuStyles } from './SideMenuStyles';
import Button from '../../ui/button/Button';

interface SideMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  toggleLogout: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({
  isOpen,
  toggleMenu,
  toggleLogout,
}) => {
  return (
    <aside
      className={`
        fixed top-0 left-0 h-full w-64 bg-[#111826fa] transition-transform z-1
        ${isOpen ? 'translate-x-0' : '-translate-x-64'}
        `}
    >
      {/* Button to open/close menu */}
      <button onClick={toggleMenu} className='text-white p-4'>
        <Menu />
      </button>

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
