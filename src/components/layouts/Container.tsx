import React from "react";
import ParticlesBackground from "../features/ParticlesBackground/ParticlesBackground";


interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className={`
            flex-1 min-h-0 overflow-auto px-6 md:px-8 lg:px-10
        `}>
            <ParticlesBackground moveSpeed={0.1} />
            {children}
        </div>
    )
}

export default Container