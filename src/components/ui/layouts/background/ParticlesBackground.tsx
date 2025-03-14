import React, { useEffect, useState } from 'react';
import { initParticlesEngine, Particles } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

const ParticlesBackground: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = {
    background: {
      color: { value: '#1a1a2e' },
    },
    particles: {
      color: { value: '#00bcd4' },
      links: {
        enable: true,
        color: '#00bcd4',
        opacity: 0.7,
        distance: 170,
        width: 2, // Adicione esta linha
      },
      move: {
        enable: true,
        speed: 0.7,
        outModes: {
          default: 'bounce',
          bottom: 'bounce', // Adicione para todos os modos
        },
      },
      number: {
        value: 300,
        density: {
          enable: true,
        },
      },
      opacity: {
        value: 0.5,
        animation: {
          enable: true, // Adicione animação de opacidade
          speed: 1,
        },
      },
      size: {
        value: {
          min: 2,
          max: 4,
        },
        animation: {
          enable: true, // Anima o tamanho
          speed: 2,
        },
      },
    },
    detectRetina: true,
  };

  return init ? (
    <Particles
      id='tsparticles'
      options={options}
      className='fixed inset-0 -z-10'
    />
  ) : null;
};

export default ParticlesBackground;
