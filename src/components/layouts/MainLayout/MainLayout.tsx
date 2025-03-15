import React, { useState } from "react"
import SideMenu from "../../navigation/SideMenu/SideMenu"
import TopBar from "../../navigation/TopBar/TopBar"
import { Outlet } from "react-router-dom"
import Container from "../Container"

const MainLayout: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="flex h-screen w-screen overflow-hidden">
            <SideMenu isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />

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