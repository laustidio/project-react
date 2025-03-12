// import React from "react";
// import Particles from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// import type { Engine, ISourceOptions } from "@tsparticles/engine";

// const ParticlesBackground: React.FC = () => {
//     const particlesInit = async (engine: Engine) => {
//         await loadSlim(engine);
//     };

//     const options: ISourceOptions = {
//         background: {
//             color: {
//                 value: "#0d0d0d",
//             },
//         },
//         particles: {
//             number: {
//                 value: 80,
//                 density: {
//                     enable: true,
//                     height: 800,
//                     width: 800
//                 },
//             },
//             color: {
//                 value: "#ffffff",
//             },
//             links: {
//                 enable: true,
//                 color: "#ffffff",
//                 opacity: 0.4,
//             },
//             move: {
//                 enable: true,
//                 speed: 1,
//             },
//         },
//     };

//     return (
//         <Particles
//         id="tsparticles"
//         init={particlesInit as ParticlesProps['init']}
//         options={options}
//         url=""
//     />
//     );
// };

// export default ParticlesBackground;
