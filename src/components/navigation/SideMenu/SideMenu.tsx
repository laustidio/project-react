import { Menu } from "lucide-react"
import React from "react"
import { Link } from "react-router-dom"
import { sideMenuStyles } from "./SideMenuStyles"


interface SideMenuProps {
    isOpen: boolean
    toggleMenu: () => void
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, toggleMenu }) => {
    return (
        <aside className={`
        fixed top-0 left-0 h-full w-64 bg-[#111826fa] transition-transform z-1
        ${isOpen ? "translate-x-0" : "-translate-x-64"}
        `}>
            {/* Button to close menu */}
            <button onClick={toggleMenu} className="text-white p-4">
                <Menu />
            </button>

            {/* Menu links */}
            <nav className="mt-10 space-y-4 text-white">
                <Link to="/home" className={sideMenuStyles.link}>
                    Home
                </Link>
                <Link to="/profile" className={sideMenuStyles.link}>
                    Profile
                </Link>
                <Link to="/settings" className={sideMenuStyles.link}>
                    Settings
                </Link>
            </nav>
        </aside>
    )
}

export default SideMenu;