import { useState } from "react";
import Container from "../Container"
import TopBar from "../../navigation/top-bar/TopBar";
import { Outlet, useNavigate } from "react-router-dom";
import SideMenu from "../../navigation/side-menu/SideMenu";

const MainLayout: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div className="flex h-screen w-screen overflow-hidden">
            <SideMenu isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} toggleLogout={handleLogout} />

            <div className="flex-1 flex flex-col h-screen">
                <TopBar toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />

                {/* Render pages without reload the entire page of the browser */}
                <div className="flex-1 min-h-0 overflow-auto">
                    <Container> {/* Render the same styles to any page being standards */}
                        <Outlet />
                    </Container>
                </div>
            </div>
        </div>
    )


}

export default MainLayout